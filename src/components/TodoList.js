import React from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import InputForm from "./InputForm";

function TodoList(props) {
  const { title, items, addNew } = props;

  return (
    <div className="todolist">
      <h1>{title}</h1>
      <InputForm addNew={addNew} />

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
