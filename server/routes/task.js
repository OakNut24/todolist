const routes = require('express').Router({ mergeParams: true });
let Task = require('../models/Task');
const { addNewTask, getUserTasks, updateTaskWithId, deleteTaskWithId } = require('../controllers/task');
// const {isUserAuthenticated} = require("../middleware/auth");

//@path /Task/:googleId/categoryName/:categoryName   --> get all the user's Tasks with the requested category(Tasks,archive,trash)
routes.route("/:googleId")
    .get(getUserTasks);


//@path /Task/add   --> add a single Task
routes.route('/').post(addNewTask);//@function: Using the function from the Task.js controller


//@path /Task:TaskID
routes.route("/:TaskID")
    // .get(getTaskWithID)//@function: Get the Task with given TaskID
    .patch(updateTaskWithId)//@function: Updates the Task with the new data 
    .delete(deleteTaskWithId);//@function: Delete Task with the given TaskID


module.exports = routes;