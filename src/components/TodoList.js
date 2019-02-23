import React from "react";

function TodoList(props) {
  const { title, items } = props;

  return (
    <div className="todolist">
      <h1>{title}</h1>

      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
