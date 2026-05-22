type Props = {
  count: number;
};

const TaskCount = ({ count }: Props) => {
  return (
    <div className="task-count">
      <span>Total Tasks: <strong>{count}</strong></span>
    </div>
  );
};

export default TaskCount;