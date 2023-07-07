import { format } from "date-fns"; // Importing the 'format' function from the 'date-fns' module
import { v4 as uuid } from "uuid"; // Importing the 'v4' function from the 'uuid' module and aliasing it as 'uuid'
import fs from "fs"; // Importing the 'fs' module for file system operations
import { promises as fsPromises } from "fs"; // Importing the 'promises' property from 'fs' and aliasing it as 'fsPromises'
import path from "path"; // Importing the 'path' module for working with file and directory paths

const logEvents = async (message, logFileName) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss"); // Formatting the current date and time
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`; // Creating the log item string

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      // Checking if the 'logs' directory exists
      await fsPromises.mkdir(path.join(__dirname, "..", "logs")); // Creating the 'logs' directory if it doesn't exist
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    ); // Appending the log item to the log file
  } catch (err) {
    console.log(err); // Handling any errors that occur during file system operations
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log"); // Logging the request information
  console.log(`${req.method} ${req.path}`); // Logging the request method and path
  next(); // Calling the next middleware function
};

export { logEvents, logger }; // Exporting the logEvents and logger functions
