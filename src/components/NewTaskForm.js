import React, {useState} from "react";


function NewTaskForm( {categories, onTaskFormSubmit } ) {
  const [ taskName, setTaskName] = useState('')
  const [ taskCategory, setTaskCategory] = useState('Code')

  function handleFormSubmit(event) {
    event.preventDefault()
    const newTask = {

      category: taskCategory,
      text: taskName
    }
    onTaskFormSubmit(newTask)
    console.log(newTask)
    }

  return (
    <form onSubmit={handleFormSubmit} key={taskName} className="new-task-form">
      <label>
        Details
        <input 
          onChange={(e) => setTaskName(e.target.value)} 
          
          type="text" 
          name="text"
          value={taskName}  />
      </label>
      <label>
        Category
        <select onChange={(e) => setTaskCategory(e.target.value)}  name="category"> 
          {categories.map((category) => {
            if (category !== "All")
            return <option>{category}</option>
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
