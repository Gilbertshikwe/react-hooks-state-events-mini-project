// Task.js
import React from "react";

function Task({ task, onDelete }) {
  const { category, text } = task;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(task.id)}>
        X
      </button>
    </div>
  );
}

export default Task;

