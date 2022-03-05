const mongoose = require("mongoose");
const { TaskSchema } = ("../models/Task");

const Task = mongoose.model('Task', TaskSchema);

const addNewTask = (async (req, res) => {
    const newTask = new Task(req.body);

    try {
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});

const getUserTasks = (async (req, res) => {
    let userGoogleId = req.params.googleId;
    console.log("userGoogleId" + userGoogleId);
    try {
        let tasks;
        if (userGoogleId) {
            tasks = await Task.find({ googleId: userGoogleId });
        }
        else {
            tasks = await Task.find();
        }
        console.log(tasks);
        res.status(200).json(tasks);

    } catch (err) {
        res.status(500).json(err)
    }
});

const updateTaskWithId = (async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true } //return the update task
        );
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status.json(err);
    }
});

const deleteTaskWithId = (async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json("Task has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }
});





exports.addNewTask = addNewTask;
exports.getUserTasks = getUserTasks;
exports.updateTaskWithId = updateTaskWithId;
exports.deleteTaskWithId = deleteTaskWithId;