import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  
  function addTask( taskObj ) {
    setTasks([...tasks, taskObj ])
  }
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory
  }
  )

  function handleRemove (deleteText) {
    setTasks(tasks.filter((task) => {
     return deleteText !== task.text
    }))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <NewTaskForm onTaskFormSubmit={addTask} categories={CATEGORIES}/>
      <TaskList onRemove={handleRemove} tasks={itemsToDisplay}/>
    </div>
  );
}

export default App;
