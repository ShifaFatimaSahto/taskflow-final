import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskListPage from "./pages/TaskListPage";
import { initialTasks } from "./data/mockTasks";
import type { Task } from "./types/task";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const showMessage = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleCreateTask = (task: Task) => {
    setTasks([...tasks, task]);
    showMessage("Task created successfully!");
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    showMessage("Task deleted successfully!");
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null);
    showMessage("Task updated successfully!");
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <TaskListPage
              tasks={tasks}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreateTaskPage
              onCreateTask={handleCreateTask}
              onUpdateTask={handleUpdateTask}
              editingTask={editingTask}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
