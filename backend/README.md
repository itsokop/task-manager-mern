# Task Manager Backend (Node.js + Express + MongoDB)

A secure backend API for task management with JWT authentication, built with the MERN stack.

## Features
- User registration/login with JWT
- CRUD operations for tasks
- Protected routes with middleware
- MongoDB data persistence
- Ready for Vercel deployment

## Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Git

## Setup (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/itsokop/task-manager-mern.git
cd task-manager-mern/backend

2. Install dependencies
npm install

3. Configure environment variables
Create .env file:

4. Start Server
npm start 
API will run at http://localhost:5000

--------------------------------------------------------------------------------

API Endpoints

Method	                        Endpoint	                Description	                    Protected
POST	                     /api/auth/register	            Register new user	                No
POST	                    /api/auth/login	                Login user (returns JWT)	        No
GET	                        /api/tasks	                    Get all tasks for user	            Yes
POST	                    /api/tasks	                    Create new task	                    Yes
PUT	                        /api/tasks/:id	                Update task	                        Yes
DELETE	                    /api/tasks/:id	                Delete task	                        Yes

-----------------------------------------------------------------------------------------------

Deployment (Vercel) :- also tried heroku but asking for credit card details and unable to procced there.

## Domain Configuration
After deployment, your backend will be assigned a random Vercel URL (e.g., `task-management-backend-rouge.vercel.app`). To customize it:

1. Go to your Vercel Dashboard (https://vercel.com/dashboard)
2. Navigate to Settings → Domains
3. Follow these steps:

Domain Configuration   
Fig: Vercel domain management interface

  
- Vercel domains are project-specific.  
- `task-management.vercel.app` is taken, so tried alternatives like:  
- `api-task-management.vercel.app`  
- `task-manager-api.vercel.app`  

Current API Base URL:  
`https://task-management-backend-rouge.vercel.app/api`

---------------------------------------------------------------------------------------------

.env template

MONGO_URI_prod=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/dbname?retryWrites=true&w=majority
JWT_SECRET=your_strong_secret_here
PORT=5000