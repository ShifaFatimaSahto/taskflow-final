# taskflow - final project

# group information
Group No: 6
Section: BSCS 6A
Members:
Shifa Fatima (2312136)
Aiman Imran (2312106)

# project Description
taskflow is a full-stack task management application built with React, Express, and mongoDB. users can create, view, and delete tasks with real-time count display and smooth loading experience.

# technologies used
# frontend
React
typescript
react router
css
vite
pnpm

# backend
node.js
express
typescript
mongoDB
Mongoose
dotenv

# how to install dependencies
# frontend
cd frontend
pnpm install

# backend
cd backend
pnpm install

# how to run
### frontend
cd frontend
pnpm dev

### backend
cd backend
npm run dev

# environment variables
create a .env file inside backend folder and add:
port = 5000
MONGO_URI=mongodb+srv://2312136_db_user:shifaaiman123@cluster0.eugiirz.mongodb.net/?appName=Cluster0

## mongoDB setup
1. go to mongodb.com/altas
2. create free account
3. create free MO cluster
4. get connection string
5. paste it in a .env file as MONGO_URL

### API routes
GET /api/tasks - get all tasks with total count
POST /api/tasks - create a new task
DELETE /api/tasks/:id - delete a task by ID

### implemented features
## Product features - Item count display
shows total number of tasks above the task list. count updates automatically when tasks are added or deleted 

### Engineering feature - Better Loading UI
shows a spinner while tasks are being loaded from the backend. prevents empty screen during data fetch.

## Project Strcture
taskflow-final/
frontend/
backend/
README.md






