import { useState } from "react";

function Task({ taskItem, handleTaskCompletedToggle }) {
  const { title, description, completed, id, priority } = taskItem;
  const [taskCompleted, setTaskCompleted] = useState(completed);

  function handleToggle() {
    handleTaskCompletedToggle(id);
    setTaskCompleted((cur) => !cur);
  }
  return (
    <li className="task">
      <input type="checkbox" checked={taskCompleted} onChange={handleToggle} />
      <div className={completed ? "task-completed" : ""}>{title}</div>
      <div className={completed ? "task-completed" : ""}>{description}</div>
      <div className={`priority ${priority}-priority`}>{priority}</div>
    </li>
  );
}
export default Task;
