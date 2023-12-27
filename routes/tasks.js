//Contains all the routes and methods

const express= require('express')
const router = express.Router()

const { getAllTasks,createTask , getTask,updateTask,deleteTask } = require('../controllers/tasks')

//since the path is same , so we can apply  the methods in one line one after other

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router