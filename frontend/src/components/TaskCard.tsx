import type { Task } from "../types/task";
import { useNavigate } from "react-router-dom";

type Props = {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
};

function TaskCard({ task, onDelete, onEdit }: Props) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Created:</strong> {task.createdAt}</p>
      {task.dueDate && <p><strong>Due:</strong> {task.dueDate}</p>}

      <div className="card-footer">
        <button
          className="btn btn-edit"
          onClick={() => {
            onEdit(task);
            navigate("/create");
          }}
        >
          Edit
        </button>
        <button
          className="btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;