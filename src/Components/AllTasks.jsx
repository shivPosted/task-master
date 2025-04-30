import Task from "./Task";

function AllTasks({ tasks, handleTaskCompletedToggle }) {
  return (
    <div className="tasks-box">
      {tasks.map((task) => (
        <Task
          taskItem={task}
          key={task.id}
          handleTaskCompletedToggle={handleTaskCompletedToggle}
        />
      ))}
    </div>
  );
}
export default AllTasks;
