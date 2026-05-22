import TaskForm from "../components/TaskForm";
import type { Task } from "../types/task";

type CreateTaskPageProps = {
  onCreateTask: (task: Task) => void;
  onUpdateTask: (task: Task) => void;
  editingTask: Task | null;
};

const CreateTaskPage = ({ onCreateTask, onUpdateTask, editingTask }: CreateTaskPageProps) => {
  return (
    <div className="page">
      <TaskForm
        onCreateTask={onCreateTask}
        onUpdateTask={onUpdateTask}
        editingTask={editingTask}
      />
    </div>
  );
};

export default CreateTaskPage;