import Task from '../models/Task.js';
// for creating tasks
export const createTask = async (req, res) => {
    try {
        const { taskName, description, dueDate } = req.body;
        const task = new Task({
            taskName,
            description,
            dueDate,
            user: req.userId
        });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// for getting task
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.userId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
