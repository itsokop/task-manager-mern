import express from 'express';
import {body, param} from 'express-validator';
import { authenticate } from '../middlewares/auth.js';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/task.js';

const router = express.Router();
router.use(authenticate);

// Task Validation Rules
const taskValidationRules = [
  body('taskName').notEmpty().withMessage('Task name is required'),
  body('dueDate').isISO8601().withMessage('Invalid date format (use YYYY-MM-DD)'),
  body('description').optional().isString()
];

// ID Validation Rule
const idValidationRule = [
  param('id').isMongoId().withMessage('Invalid task ID')
];

router.post('/create', taskValidationRules, createTask);
router.get('/get', getTasks);
router.put('/update/:id', idValidationRule, taskValidationRules, updateTask);
router.delete('/delete/:id', idValidationRule, deleteTask);

export default router;