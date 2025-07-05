import { EntityTask } from "./entity.js";
import { openDB } from "../db/config.js";

export class TaskCollection extends EntityTask{
    constructor(title, status, date){
        super(title, status, date);
        this.tasks = [];
        this.db = undefined;
    }

    async openDatabase(){
        try {
            this.db = await openDB();
        } catch (error) {
            console.log(error);
        }
    }

    async createTask(req, res, task){
        try {
            await this.db.run(
                "INSERT INTO task (id, title, status, date) VALUES (?, ?, ?, ?)",
                [task.id, task.title, task.status, task.date]
            );
            res.status(201).send(task);
        } catch (error) {
            console.log(error);
            res.status(500).send("Erro ao criar a task");
        }
    }

}