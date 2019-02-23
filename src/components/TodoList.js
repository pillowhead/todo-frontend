import React from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

function TodoList(props) {
  const { title, items } = props;

  return (
    <div className="todolist">
      <h1>{title}</h1>

      <ul className="list-group">
        {items.map(item => (
          <TodoItem key={item.id} data={item} />
        ))}
      </ul>
      <Footer items={items} />
    </div>
  );
}

export default TodoList;
