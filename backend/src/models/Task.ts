// Task model by Shifa fatima

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  status: {
    type: String,
    enum: ["Todo", "In Progress", "Done"],
    default: "Todo"
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low"
  },
  dueDate: { type: String },
  createdAt: {
    type: String,
    default: () => new Date().toISOString().split("T")[0]
  }
});

export default mongoose.model("Task", taskSchema);