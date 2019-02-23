import React from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

function TodoList(props) {
  const { title, items } = props;

  return (
    <div className="todolist">
      <h1>{title}</h1>

      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Please, write new task..."
        />
        <div class="input-group-append" id="button-addon4">
          <button class="btn btn-outline-secondary" type="button">
            Add Task
          </button>
        </div>
      </div>

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
