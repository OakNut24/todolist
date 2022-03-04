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
    // let task = req.body;//Takes all the data inside the req. googleId and etc'
    // let googleId = "";
    // if (task) {
    //     googleId = task.googleId;
    // } else {
    //     googleId = "no googleId";
    // }


    // const newTask = new Task({
    //     title: task.title,
    //     desc: task.content,
    //     googleId: task.googleId,
    // });
    // newTask.save()
    //     .then(() => res.send({ _id: newTask._id })) //Send the new task created at the MongoDB Atlas with the _id to the client 
    //     .catch(err => res.status(400).json('Error: ' + err));
});

const getUserTasks = (async (req, res) => {
    try {
        let response = await Task.find({}, (err, tasks) => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.json(tasks);
            }
        })
    } catch (err) {
        res.status(500).json(err)
    }
    // let userGoogleId = req.params.googleId;
});


// const getNoteWithID = ((req, res) => {

//     Note.findOne({ _id: req.params.noteID }, (err, note) => {
//         if (err) {
//             res.send(err);
//         } else {
//             if (note) {
//                 res.json(note);
//             } else {
//                 res.json({ message: "Not not found with ID:" + req.params.noteID });
//             }
//         }
//     });
// });

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