// Production-safe logger utility
// Removes console statements in production builds

const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },
  error: (...args) => {
    // Always log errors, but can be sent to error tracking service in production
    if (isDevelopment) {
      console.error(...args);
    } else {
      // In production, you can send to error tracking service
      // Example: Sentry.captureException(...args);
      console.error(...args); // Keep for critical errors
    }
  },
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },
  info: (...args) => {
    if (isDevelopment) {
      console.info(...args);
    }
  },
  debug: (...args) => {
    if (isDevelopment) {
      console.debug(...args);
    }
  },
};

export default logger;

