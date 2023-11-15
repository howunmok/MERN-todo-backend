import Task from "../models/tasks.model.js";

// add task
export const addTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).send(newTask);
  } catch (err) {
    res.status(400).send(err);
  }
};

// get tasks
export const getTask = async (req, res) => {
  try {
    //     await Task.find().then((result) => res.json(result));
    //   } catch {
    //     res.status(400).send(err);
    const foundTasks = await Task.find();
    if (foundTasks.length > 0) {
      res.json(foundTasks);
    } else {
      console.log("No tasks found");
      res.status(404).send("No tasks found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

// delete tasks
export const deleteTask = async (req, res) => {
  const { _id } = req.params;
  try {
    const deleteTask = await Task.findOneAndDelete({ _id });
    if (deleteTask) {
      res.json(deleteTask);
    } else {
      console.log(`Error in deleting task id ${_id}`);
      res.status(500).send("Delete Error");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// update task
export const updateTask = async (req, res) => {
  const { _id } = req.params;
  try {
    const foundTask = await Task.findById({ _id });
    if (foundTask) {
      foundTask.done = !foundTask.done;
      await foundTask.save();
      res.json(foundTask);
    } else {
      console.log(`Error in updating task id ${_id}`);
      res.status(404).send("Task not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
