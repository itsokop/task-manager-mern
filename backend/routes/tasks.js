import express from 'express';
import { authenticate } from '../middlewares/auth.js';
import { createTask, getTasks } from '../controllers/task.js';

const router = express.Router();
router.use(authenticate);

router.post('/create', createTask);
router.get('/get', getTasks);

export default router;