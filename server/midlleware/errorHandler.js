import { logEvents } from "./logger"; // Importing the logEvents function from the './logger' module

const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  ); // Logging the error details
  console.log(err.stack); // Logging the error stack trace

  const status = res.statusCode ? res.statusCode : 500; // Setting the response status code to 500 (server error) if it's not already set

  res.status(status); // Setting the response status code

  res.json({ message: err.message }); // Sending a JSON response with the error message
};

export default errorHandler; // Exporting the errorHandler function as the default export
