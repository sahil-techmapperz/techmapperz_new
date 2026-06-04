const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
    console.error('Please define the MONGO_URL environment variable inside .env');
    process.exit(1);
}

const ChallengeSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});

const SolutionSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    features: [{ type: String }]
});

const ResultSchema = new mongoose.Schema({
    label: { type: String },
    value: { type: String },
    description: { type: String },
    icon: { type: String }
});

const TestimonialSchema = new mongoose.Schema({
    quote: { type: String },
    author: { type: String },
    position: { type: String }
});

const ProjectDetailsSchema = new mongoose.Schema({
    year: { type: String },
    location: { type: String },
    duration: { type: String },
    teamSize: { type: String },
    industry: { type: String },
    projectType: { type: String }
});

const GalleryImageSchema = new mongoose.Schema({
    src: { type: String },
    alt: { type: String }
});

const ExecutionStepSchema = new mongoose.Schema({
    step: String,
    title: String,
    desc: String
});

const HighlightSchema = new mongoose.Schema({
    title: String,
    description: String
});

const PortfolioSchema = new mongoose.Schema({
    image: { type: String },
    category: { type: String },
    techStack: { type: String },
    name: { type: String },
    link: { type: String },
    slug: { type: String },
    details: [{ type: String }],
    projectDetails: { type: ProjectDetailsSchema },
    challenges: [ChallengeSchema],
    solutions: [SolutionSchema],
    results: [ResultSchema],
    galleryImages: [GalleryImageSchema],
    deliverables: [{ type: String }],
    executionSteps: [ExecutionStepSchema],
    highlights: [HighlightSchema],
    relatedServices: [{ type: String }],
    conclusion: { type: String },
    testimonial: { type: TestimonialSchema },
    createdAt: { type: Date, default: Date.now }
}, { strict: false });

const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', PortfolioSchema);

const newPortfolioData = {
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1000",
    category: "Dairy / B2B E-commerce / Sales Automation / ERP Integration",
    seoTitle: "B2B E-commerce Sales Dashboard & ERP Integration | Techmapperz",
    seoDescription: "See how Techmapperz developed a B2B e-commerce sales portal for White Spread Foods with hierarchy-based order approval, dashboard visibility, ERP integration, and APK connectivity.",
    techStack: "B2B E-commerce Platform Development, Sales Dashboard Development, Role-Based Workflow Design, Hierarchy-Based Approval Logic, ERP Integration, APK Ecosystem Connectivity, Responsive Portal Interface",
    name: "B2B E-commerce Platform with Sales Dashboard and Hierarchy-Based Order Approval for a Dairy Company",
    link: "/portfolios/white-spread-foods",
    slug: "white-spread-foods",
    details: [
        "Techmapperz designed and developed a B2B e-commerce platform and sales dashboard for White Spread Foods, built to support structured order placement, approval-based sales workflows, and better operational control for a growing dairy business. Alongside the web platform, the solution was connected with a broader ERP ecosystem and multiple APK-based applications to support end-to-end field and operational workflows. The public-facing login screen identifies the system as the WSFPL Sales Portal, while the company’s main website presents White Spread Foods through its Sabho Milk brand and highlights quality-controlled dairy operations."
    ],
    projectDetails: {
        industry: "Dairy / FMCG / Distribution",
        projectType: "B2B E-commerce Platform + Sales Dashboard"
    },
    challenges: [
        {
            title: "What the Client Needed",
            description: "White Spread Foods operates in a business environment where sales execution is not simply about taking orders. In a dairy and FMCG distribution setup, multiple moving parts need to work together — field sales, order collection, approval layers, supply coordination, product movement, operational reporting, and ERP synchronization. The company needed a system that could bring more structure and visibility into this process while reducing dependence on disconnected manual workflows."
        },
        {
            title: "Approval Chains",
            description: "A standard online ordering website would not have been enough. The client needed a platform where orders could move through a defined approval chain based on role or hierarchy, helping ensure better sales governance and control."
        },
        {
            title: "Integration",
            description: "The client also needed deeper integration. The sales platform could not remain isolated from the rest of the business. It had to connect with a full ERP solution and work alongside multiple APK-based applications so field and office teams could operate within one connected digital ecosystem."
        }
    ],
    solutions: [
        {
            title: "Connected Sales Environment",
            description: "Techmapperz developed a custom B2B sales portal designed around the real operating needs of a dairy company. Instead of treating the platform as a basic order-entry system, we approached it as a connected sales and approval environment where commercial activity, internal control, and operational coordination could work together.",
            features: [
                "Custom B2B sales portal",
                "Dedicated operational control",
                "Authentication-driven access"
            ]
        },
        {
            title: "Workflow Control",
            description: "At the workflow level, the system was structured to support hierarchy-based order approval, enabling better governance over how orders are placed, reviewed, and processed across different business roles.",
            features: [
                "Hierarchy-based order approval",
                "Better sales governance",
                "ERP connected ecosystem"
            ]
        }
    ],
    deliverables: [
        "B2B e-commerce sales portal for a dairy business",
        "Secure user login-based access for operational users",
        "Hierarchy-based order approval workflow",
        "Detailed sales dashboard for business visibility",
        "Order management with approval-linked control flow",
        "ERP-connected sales and operations environment",
        "Integration with multiple APK-based business applications",
        "Structured workflow for role-based processing and oversight",
        "Scalable architecture for distribution-led business growth"
    ],
    executionSteps: [
        {
            step: "01",
            title: "Business Workflow Discovery",
            desc: "We started by understanding how the client’s sales and operational processes worked in practice. In a dairy distribution environment, sales workflows often include multiple business roles, approval dependencies, stock or dispatch coordination, and reporting needs. The project needed to reflect those realities rather than force the client into a generic order-taking model."
        },
        {
            step: "02",
            title: "Sales Flow and Approval Architecture Planning",
            desc: "The next step was mapping the approval hierarchy and defining how order movement should be controlled inside the system. This stage was critical because the platform had to support structured decision-making, not just data entry. We designed the solution around business logic that helps organizations maintain control as sales teams and channels scale."
        },
        {
            step: "03",
            title: "Dashboard and Portal UX Design",
            desc: "For internal systems, usability matters just as much as technical depth. We designed the portal to be practical, clear, and role-oriented so users could work efficiently within the system. The public-facing login screen confirms the platform’s dedicated portal structure, but the real focus of the project was making daily operational interaction easier for authorized teams."
        },
        {
            step: "04",
            title: "Development of Integrated Sales Platform",
            desc: "Our team developed the sales portal as a connected platform that supports order handling, dashboard-driven monitoring, and hierarchy-led control. The objective was to give the client a system that could handle real commercial workflows while staying aligned with internal business structure."
        },
        {
            step: "05",
            title: "ERP and APK Ecosystem Integration",
            desc: "A major part of the project was integration. We connected the platform with a full ERP solution and multiple APK-based tools so that data and workflow continuity could extend beyond the browser dashboard. This helped create a more unified digital environment for the client’s broader business operations."
        },
        {
            step: "06",
            title: "Operational Readiness and Scale Support",
            desc: "Before final rollout, the solution was refined around business usability, workflow continuity, and long-term scalability. The final outcome was a platform designed not only for present-day process improvement, but also for future operational maturity."
        }
    ],
    results: [
        { description: "improved control over how sales orders move across the organization" },
        { description: "enabled hierarchy-based approval for better governance and accountability" },
        { description: "created stronger visibility through a dedicated sales dashboard" },
        { description: "connected the sales workflow with a broader ERP ecosystem" },
        { description: "supported digital coordination across multiple APK-based applications" },
        { description: "built a more scalable foundation for distribution and operational growth" }
    ],
    conclusion: "The final solution gave White Spread Foods a more structured digital sales environment with stronger operational control. Instead of relying on disconnected sales processes or manual coordination, the business now has a system designed to support controlled order movement, dashboard visibility, and broader integration across its operational ecosystem.",
    highlights: [
        {
            title: "Sales-Control Focused Platform",
            description: "Built to support structured order movement instead of basic order capture."
        },
        {
            title: "Hierarchy-Based Approval Workflow",
            description: "Designed to reflect real organizational control and role-based order authorization."
        },
        {
            title: "ERP and APK Connected Ecosystem",
            description: "Integrated with a broader digital operations environment so the sales dashboard works as part of a larger system."
        }
    ],
    relatedServices: [
        "B2B E-commerce Website Development",
        "Custom ERP Integration Solutions",
        "Sales Dashboard Development",
        "FMCG / Distribution Management Platforms",
        "Mobile App / APK-Connected Business Systems"
    ],
    testimonial: {
        quote: "Techmapperz delivered a platform that truly understood our operations, integrating our sales processes seamlessly with our wider ERP environment.",
        author: "White Spread Foods Team",
        position: "Operations Management"
    },
    galleryImages: [
        { src: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1000", alt: "B2B Sales Portal" },
        { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", alt: "Sales Dashboard" },
        { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", alt: "ERP Integration" },
        { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Workflow Control" },
        { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", alt: "Operational Sync" }
    ],
    cta: {
        title: "Need a Similar B2B Sales and ERP-Connected Platform for Your Business?",
        heading: "Let's plan your next B2B ordering portal\nor custom ERP-integrated solution.",
        description: "If your company manages complex sales workflows, distributor ordering, internal approvals, or multi-level operational coordination, Techmapperz can help you build a platform that fits the way your business actually works.",
        button1Text: "Start a Similar Project",
        button1Link: "/contact",
        button2Text: "View More Projects",
        button2Link: "/portfolios"
    }
};

async function insertDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB.');

        await Portfolio.findOneAndUpdate(
            { slug: newPortfolioData.slug },
            newPortfolioData,
            { new: true, upsert: true }
        );

        console.log(`Successfully updated/inserted portfolio: ${newPortfolioData.slug}`);
        process.exit(0);
    } catch (error) {
        console.error('Error inserting DB:', error);
        process.exit(1);
    }
}

insertDB();
