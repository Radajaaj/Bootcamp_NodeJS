import { Router } from 'express';
import { TaskCollection } from "../models/taskModel.js";
import { EntityTask } from "../models/entity.js";

const router = Router();
const TaskModel = new TaskCollection();

router.post('/', (req, res) => {
    const { title, status, date } = req.body;
    const task = new EntityTask(title, status, date);
    console.log(task);
    TaskModel.createTask(req, res, task);
})

export { router as routes }