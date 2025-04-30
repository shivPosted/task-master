import { useState } from "react";
import Button from "./Button";

function Task({ taskItem, handleTaskCompletedToggle, handleDeleteTask }) {
  const { title, description, completed, id, priority } = taskItem;
  const [taskCompleted, setTaskCompleted] = useState(completed);

  function handleToggle() {
    handleTaskCompletedToggle(id);
    setTaskCompleted((cur) => !cur);
  }

  return (
    <li
      className="task"
      style={{
        position: "relative",
      }}
    >
      <input type="checkbox" checked={taskCompleted} onChange={handleToggle} />
      <div className="task-info">
        <div className={`task-title ${completed ? "task-completed" : ""}`}>
          {title}
        </div>
        <div
          className={`task-description ${completed ? "task-completed" : ""}`}
        >
          {description}
        </div>
        <div className={`priority ${priority}-priority`}>{priority}</div>
      </div>
      <Button
        handleClick={() => handleDeleteTask(id)}
        className="delete-task-btn"
      >
        &times;
      </Button>
    </li>
  );
}
export default Task;
