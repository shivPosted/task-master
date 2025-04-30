import { useState } from "react";
import Header from "./Components/Header";
import CreateTasks from "./Components/CreateTasks";
import AllTasks from "./Components/AllTasks";

const dummyTasks = [
  {
    id: "ftct",
    title: "first task",
    description: "casual task",
    dueDate: new Date().toISOString(),
    completed: false,
    priority: "high",
  },
];

function App() {
  const [tasks, setTasks] = useState(dummyTasks);

  function handleNewTasks(newTaskObj) {
    setTasks((cur) => [...cur, newTaskObj]);
  }
  function handleTaskCompletedToggle(id) {
    const modifiedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task,
    );
    setTasks(modifiedTasks);
  }

  return (
    <main>
      <Header />
      <CreateTasks handleNewTask={handleNewTasks} />
      <AllTasks
        tasks={tasks}
        handleTaskCompletedToggle={handleTaskCompletedToggle}
      />
    </main>
  );
}
export default App;
