import React from "react";
import TodoList from "./components/TodoList";

function App() {
  let items = [
    {
      id: 1,
      text: "Cras justo odio",
      completed: true,
      createdDate: 1501594393387,
      completedDate: 1501594873717
    },
    {
      id: 2,
      text: "Dapibus ac facilisis in",
      completed: false,
      createdDate: 1501594393387
    },
    {
      id: 3,
      text: "Morbi leo risus",
      completed: false,
      createdDate: 1501594393387
    },
    {
      id: 4,
      text: "Porta ac consectetur ac",
      completed: false,
      createdDate: 1501594393387
    },
    {
      id: 5,
      text: "Vestibulum at eros",
      completed: false,
      createdDate: 1501594393387
    }
  ];
  let title = "ToDo list";

  return (
    <div className="container">
      <div className="row">
        <TodoList title={title} items={items} />
      </div>
    </div>
  );
}

export default App;
