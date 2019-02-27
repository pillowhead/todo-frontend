import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import InputForm from "./InputForm";
import Filter from "./Filter";
import TodoService from "./TodoService";

class TodoList extends Component {
  constructor(props) {
    super(props);

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

  addNew(text) {
    const data = { text: text };
    TodoService.createTodoItem(data);
  }

  changeFilter(filter) {
    this.setState({ filter });
  }

  applyFilter(unfilteredItems, filter) {
    switch (filter) {
      case "completed":
        return unfilteredItems.filter(item => item.completed === true);

      case "active":
        return unfilteredItems.filter(item => item.completed !== true);

      default:
        return unfilteredItems;
    }
  }

  render() {
    const title = this.props.title;
    const filter = this.state.filter;
    const items = this.state.items;

    const filteredItems = this.applyFilter(items, filter);

    return (
      <div className="todolist">
        <h1>{title}</h1>
        <InputForm addNew={this.addNew.bind(this)} />

        <ul className="list-group">
          {filteredItems.map(item => (
            <TodoItem key={item.id} data={item} />
          ))}
        </ul>
        <Footer items={items} />
        <Filter change={this.changeFilter.bind(this)} />
      </div>
    );
  }
}

export default TodoList;
