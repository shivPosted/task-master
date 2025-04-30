import { useState } from "react";

function Task({ taskItem, handleTaskCompletedToggle }) {
  const { title, description, completed, id } = taskItem;
  const [taskCompleted, setTaskCompleted] = useState(completed);

  function handleToggle() {
    handleTaskCompletedToggle(id);
    setTaskCompleted((cur) => !cur);
  }
  return (
    <li>
      <input type="checkbox" checked={taskCompleted} onChange={handleToggle} />
      <div>{title}</div>
      <div>{description}</div>
    </li>
  );
}
export default Task;
