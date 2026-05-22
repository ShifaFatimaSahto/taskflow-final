import { useState, useEffect } from "react";
import type { Task, TaskPriority, TaskStatus } from "../types/task";

type TaskFormProps = {
  onCreateTask: (task: Task) => void;
  onUpdateTask: (task: Task) => void;
  editingTask: Task | null;
};

const TaskForm = ({ onCreateTask, onUpdateTask, editingTask }: TaskFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<TaskStatus>("Todo");
  const [priority, setPriority] = useState<TaskPriority>("Low");
  const [dueDate, setDueDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (editingTask) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate ?? "");
    } else {
      setTitle("");
      setDescription("");
      setStatus("Todo");
      setPriority("Low");
      setDueDate("");
    }
  }, [editingTask]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() === "") {
      setError("Task title is required.");
      return;
    }

    if (editingTask) {
      const updatedTask: Task = {
        ...editingTask,
        title,
        description,
        status,
        priority,
        dueDate: dueDate || undefined,
      };
      onUpdateTask(updatedTask);
    } else {
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        status,
        priority,
        dueDate: dueDate || undefined,
        createdAt: new Date().toISOString().split("T")[0],
      };
      onCreateTask(newTask);
    }

    setTitle("");
    setDescription("");
    setStatus("Todo");
    setPriority("Low");
    setDueDate("");
    setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editingTask ? "Update Task" : "Create New Task"}</h2>

      {error && <p className="error-message">{error}</p>}

      <div className="form-group">
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
      </div>

      <div className="form-group">
        <label>Status</label>
        <select
          className="input"
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <div className="form-group">
        <label>Priority</label>
        <select
          className="input"
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="form-group">
        <label>Due Date (Optional)</label>
        <input
          className="input"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-create">
        {editingTask ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
};

export default TaskForm;