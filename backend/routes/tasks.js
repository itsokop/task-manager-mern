import express from 'express';
import { authenticate } from '../middlewares/auth.js';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/task.js';

const router = express.Router();
router.use(authenticate);

router.post('/create', createTask);
router.get('/get', getTasks);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router;