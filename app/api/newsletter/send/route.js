import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Newsletter from '@/app/lib/models/Newsletter';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // Check if SMTP configuration is available
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
    return null; // SMTP not configured
  }

  const port = parseInt(smtpPort, 10);
  const isSecurePort = port === 465; // Port 465 uses SSL, port 587 uses STARTTLS
  
  return nodemailer.createTransport({
    host: smtpHost,
    port: port,
    secure: isSecurePort, // true for 465 (SSL), false for 587 (STARTTLS)
    requireTLS: port === 587, // Require TLS for port 587
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    tls: {
      // Do not fail on invalid certificates (useful for self-signed certs)
      rejectUnauthorized: false
    }
  });
};

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { subject, content } = body;

    // Validate required fields
    if (!subject || !content) {
      return NextResponse.json(
        { error: 'Subject and content are required' },
        { status: 400 }
      );
    }

    // Get all active subscribers
    const subscribers = await Newsletter.find({ isSubscribed: true }).select('email').lean();

    if (subscribers.length === 0) {
      return NextResponse.json(
        { error: 'No active subscribers found' },
        { status: 404 }
      );
    }

    const emailAddresses = subscribers.map(sub => sub.email);
    // Use SMTP_FROM if provided, otherwise fall back to SMTP_USER
    const smtpFrom = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@techmapperz.com';
    const fromName = process.env.SMTP_FROM_NAME || 'Techmapperz';

    // Create transporter
    const transporter = createTransporter();

    if (!transporter) {
      return NextResponse.json(
        { 
          error: 'SMTP configuration not found. Please configure SMTP settings in environment variables.',
          required: ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'],
          optional: ['SMTP_FROM']
        },
        { status: 500 }
      );
    }

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { 
          error: 'SMTP configuration is invalid. Please check your SMTP settings.',
          details: verifyError.message
        },
        { status: 500 }
      );
    }

    // Send emails to all subscribers
    const results = {
      success: [],
      failed: []
    };

    // Convert content to HTML if it's plain text
    const htmlContent = content.includes('<') ? content : content.replace(/\n/g, '<br>');

    // Send emails in batches to avoid overwhelming the SMTP server
    const batchSize = 10;
    for (let i = 0; i < emailAddresses.length; i += batchSize) {
      const batch = emailAddresses.slice(i, i + batchSize);
      
      await Promise.allSettled(
        batch.map(async (email) => {
          try {
            const info = await transporter.sendMail({
              from: `"${fromName}" <${smtpFrom}>`,
              to: email,
              subject: subject,
              html: htmlContent,
              text: content, // Plain text version
              replyTo: smtpFrom, // Set reply-to to the same address
            });

            results.success.push({ email, messageId: info.messageId });
            console.log(`Email sent to ${email}:`, info.messageId);
          } catch (error) {
            console.error(`Failed to send email to ${email}:`, error.message);
            results.failed.push({ email, error: error.message });
          }
        })
      );

      // Small delay between batches to avoid rate limiting
      if (i + batchSize < emailAddresses.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    const successCount = results.success.length;
    const failedCount = results.failed.length;

    return NextResponse.json(
      { 
        message: `Newsletter sent to ${successCount} subscribers${failedCount > 0 ? `, ${failedCount} failed` : ''}`,
        subject,
        totalRecipients: emailAddresses.length,
        successCount,
        failedCount,
        results: {
          successful: results.success,
          failed: results.failed
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending newsletter:', error);
    return NextResponse.json(
      { error: 'Error sending newsletter', details: error.message },
      { status: 500 }
    );
  }
}

