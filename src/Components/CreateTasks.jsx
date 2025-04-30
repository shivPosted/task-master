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
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return null;
    const newTask = {
      id: createId({ title, description }),
      title,
      description,
      completed: false,
    };

    handleNewTask(newTask);
    setTitle("");
    setDescription("");
  }
  return (
    <form className="create-tasks" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add Task</Button>
    </form>
  );
}
export default CreateTasks;
