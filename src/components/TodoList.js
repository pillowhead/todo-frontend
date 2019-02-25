import React from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import InputForm from "./InputForm";
import Filter from "./Filter";

function TodoList(props) {
  const { title, items, addNew, filter, changeFilter } = props;

  const filteredItems = applyFilter(items, filter);

  return (
    <div className="todolist">
      <h1>{title}</h1>
      <InputForm addNew={addNew} />

      <ul className="list-group">
        {filteredItems.map(item => (
          <TodoItem key={item.id} data={item} />
        ))}
      </ul>
      <Footer items={items} />
      <Filter change={changeFilter} />
    </div>
  );
}

function applyFilter(unfilteredItems, filter) {
  switch (filter) {
    case "completed":
      return unfilteredItems.filter(item => item.completed === true);

    case "active":
      return unfilteredItems.filter(item => item.completed !== true);

    default:
      return unfilteredItems;
  }
}

export default TodoList;
