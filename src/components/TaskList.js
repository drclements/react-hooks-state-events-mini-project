import React, {useState} from "react";
import Task from "./Task"

function TaskList( {tasks, onRemove } ) {



  return (
    <div className="tasks">
      {tasks.map((task) => (
          <Task 
          onRemove={onRemove}
          key={task.text}
          text={task.text}
          category={task.category}
          
           />
          
        ))}
    </div>
    
  );
}

export default TaskList;
