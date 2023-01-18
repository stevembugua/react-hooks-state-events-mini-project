import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS as tasks } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES });

function App() {
  const [filter, setFilter] = useState("All");
  const [TASKS, setTasks] = useState(tasks);

  const onFilterList = (category) => setFilter(category);
  const onTaskFormSubmit = (newTask) => {
    let updated = [...TASKS, newTask];

    setTasks(updated);
  };

  function onDelete(text) {
    const updatedData = TASKS.filter((task) => task.text !== text);
    setTasks(updatedData);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilterList={onFilterList} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={TASKS} filter={filter} onDelete={onDelete} />
    </div>
  );
}

export default App;