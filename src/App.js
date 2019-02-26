import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoService from "./components/TodoService";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: "all",
      items: []
    };
  }

  componentWillMount() {
    this.load();
  }

  async load() {
    let res = await TodoService.getTodoList(this.state.filter);

    this.setState({
      items: res.data
    });
  }

  render() {
    let title = "ToDo list";

    return (
      <div className="container">
        <div className="row">
          <TodoList
            title={title}
            items={this.state.items}
            addNew={this.addNew.bind(this)}
            filter={this.state.filter}
            changeFilter={this.changeFilter.bind(this)}
          />
        </div>
      </div>
    );
  }

  addNew(text) {
    let nextId = this.state.items.length + 1; //basic nextId concept
    let item = {
      id: nextId,
      text: text
    };
    let updatedList = this.state.items.concat([item]);

    this.setState({
      items: updatedList
    });
  }

  changeFilter(filter) {
    this.setState({ filter });
  }
}

export default App;
