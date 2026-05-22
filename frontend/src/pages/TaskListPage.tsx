import TaskCard from "../components/TaskCard";
import type { Task } from "../types/task";

type TaskListPageProps = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
};

const TaskListPage = ({ tasks, onDelete, onEdit }: TaskListPageProps) => {
  return (
    <div className="page">
      <h2 className="page-title">All Tasks</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet. Create one!</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskListPage;