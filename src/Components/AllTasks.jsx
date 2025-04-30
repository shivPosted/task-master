import Task from "./Task";

function AllTasks({ tasks, handleTaskCompletedToggle, handleDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          taskItem={task}
          key={task.id}
          handleTaskCompletedToggle={handleTaskCompletedToggle}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}
export default AllTasks;
