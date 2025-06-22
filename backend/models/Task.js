import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export default mongoose.model('Task', TaskSchema);