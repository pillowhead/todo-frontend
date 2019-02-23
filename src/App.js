import React from "react";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>ToDo List</h1>

          <ul className="list-group">
            <li className="list-group-item">
              Cras justo odio
              <button class="btn btn-primary" type="submit">
                Complete
              </button>
              <button class="btn btn-primary" type="submit">
                Delete
              </button>
            </li>
            <li className="list-group-item list-group-item-success">
              Dapibus ac facilisis in
            </li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
