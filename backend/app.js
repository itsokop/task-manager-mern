import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';
import 'dotenv/config';
const app = express();

// Middleware
// app.use(cors());
app.use(
    cors({
        origin: [
            "https://task-managment-frontend-six.vercel.app/",
            "http://localhost:5173",
        ],
        credentials: true,
    })
);
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Error handling
// app.use(errorHandler);

// MongoDB connection (via config/db.js)

mongoose.connect(process.env.MONGO_URI_prod)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas');
        console.log(`Database: ${mongoose.connection.db.databaseName}`);
        console.log(`Host: ${mongoose.connection.host}`);
    })
    .catch(err => {
        console.error('Connection failed:');
        console.error(err.message);
        console.log('Full connection string used:', process.env.MONGO_URI_PROD);
    });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;