import { useState } from "react";
import Button from "./Button";

function CreateTasks({ handleNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function createId(task) {
    const titleId = task.title
      .split(" ")
      .reduce((accum, titleWord) => (accum += titleWord[0]), "");
    const descriptionId = task.description
      .split(" ")
      .reduce((accum, descriptionWord) => (accum += descriptionWord[0]), "");
    return titleId + descriptionId;
  }
  function resetForm(form) {
    const titleInput = form.querySelector(".title-input");
    const descriptionInput = form.querySelector(".description-input");
    titleInput.blur();
    descriptionInput.blur();
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return null;
    const newTask = {
      id: createId({ title, description }),
      title,
      description,
      completed: false,
      priority: "low",
    };

    handleNewTask(newTask);
    resetForm(e.target);
    setTitle("");
    setDescription("");
  }
  return (
    <form className="create-tasks" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />
      <input
        id=""
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="description-input"
      />
      <Button className={"add-task-btn"}>Add Task</Button>
    </form>
  );
}
export default CreateTasks;
