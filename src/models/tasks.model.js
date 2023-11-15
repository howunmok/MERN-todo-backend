import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Tasks", TasksSchema);

export default Task;
