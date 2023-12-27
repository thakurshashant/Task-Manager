const express = require('express')
const app = express();
const tasks = require('./routes/tasks')


//middleware
app.use(express.json()) //so we can access json parsing


//routes
app.get('/hello' ,(req,res) =>{
    res.send("Task Manager App")
})


app.use('/api/v1/tasks' , tasks)

//app.get('api/v1/tasks')   -get all the tasks
//app.post('api/v1/tasks')   - create new tasks
//app.get('api/v1/tasks/:id')   -get single tasks
//app.patch('api/v1/tasks/:id')   -update tasks
//app.delete('api/v1/tasks/:id')   -delete tasks

const PORT = 3000

app.listen(PORT , console.log(`server is listenin on port :${PORT}`))