import React from "react";
import Task from "./Task";

function TaskList({ tasks, filter, onDelete }) {
  // Filter data
  const filteredData = tasks.filter((item) => {
    if (filter === "All") {
      return true;
    } else {
      return item.category === filter;
    }
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredData.map((task, index) => {
        return (
          <Task
            key={index}
            category={task.category}
            text={task.text}
            handleDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;