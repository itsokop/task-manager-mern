import Task from '../models/Task.js';
import { validationResult } from 'express-validator';
// for creating tasks
export const createTask = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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
        const tasks = await Task.find({ user: req.userId }).sort({ dueDate: 1 });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Update a task
export const updateTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const { taskName, description, dueDate } = req.body;
        const task = await Task.findOneAndUpdate(
            { _id: id, user: req.userId },
            // Explicit fields only
            { taskName, description, dueDate },
            { new: true }
        );
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a task
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndDelete({ _id: id, user: req.userId });
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};