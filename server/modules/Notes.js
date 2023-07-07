// Import the required dependencies
import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence"; // Package for generating auto-incremented ticket numbers

// Tell mongoose to use the AutoIncrement plugin
const AutoIncrement = AutoIncrementFactory(mongoose);

// Define the noteSchema using mongoose.Schema
const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the User model
      required: true,
      ref: "User", // Name of the referenced model
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the schema
  }
);

// Plugin the AutoIncrement plugin to the noteSchema
noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket", // Field name to store the auto-incremented ticket number
  id: "ticketNums", // Identifier for the AutoIncrement plugin
  start_seq: 500, // Starting value for the auto-incremented ticket number
});

// Create and export the Notes model using the noteSchema
export default mongoose.model("Note", noteSchema);
