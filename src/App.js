import React, { Component } from "react";
import TodoList from "./components/TodoList";
const uuidv1 = require("uuid/v1");

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [
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
      ]
    };
  }

  render() {
    let title = "ToDo list";

    return (
      <div className="container">
        <div className="row">
          <TodoList
            title={title}
            addNew={this.addNew.bind(this)}
            items={this.state.items}
          />
        </div>
      </div>
    );
  }

  addNew(text) {
    let nextId = uuidv1(); // to test later
    //let nextId = this.state.items.length + 1;
    let item = {
      id: nextId,
      text: text
    };
    let updatedList = this.state.items.concat([item]);

    this.setState({
      items: updatedList
    });
  }
}

export default App;
