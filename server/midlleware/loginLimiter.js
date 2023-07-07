import rateLimit from "express-rate-limit"; // Importing the 'express-rate-limit' module
import { logEvents } from "./logger.js"; // Importing the logEvents function from the './logger.js' module

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 login requests per `window` per minute
  message: {
    message:
      "Too many login attempts from this IP, please try again after a 60 second pause",
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      "errLog.log"
    ); // Logging the rate limit exceeded error
    res.status(options.statusCode).send(options.message); // Sending the rate limit response
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export default loginLimiter; // Exporting the loginLimiter as the default export