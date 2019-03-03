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
    TodoService.createTodoItem(data).then(() => {
      this.load();
    });
  }

  changeStatus(id, checked) {
    checked
      ? TodoService.incompleteTodoItem(id).then(() => this.load())
      : TodoService.completeTodoItem(id).then(() => this.load());
  }

  renameItem(id, text) {
    const data = { text: text };
    TodoService.updateTodoItem(id, data).then(() => {
      this.load();
    });
  }

  deleteItem(id) {
    TodoService.deleteTodoItem(id).then(() => {
      this.load();
    });
  }

  deleteCompleted(items) {
    items
      .filter(item => item.completed)
      .forEach(item => TodoService.deleteTodoItem(item.id));
    this.load();
  }

  completeBulk(items) {
    items.forEach(item => {
      if (item.completed === false) {
        TodoService.completeTodoItem(item.id).then(() => this.load());
      }
    });
    this.changeFilter("all");
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
    const addNewMessage = "Add new task...";

    return (
      <div className="todolist">
        <h1>{title}</h1>
        <InputForm
          option="new"
          addNew={this.addNew.bind(this)}
          message={addNewMessage}
        />

        <ul className="list-group">
          {filteredItems.map(item => (
            <TodoItem
              key={item.id}
              data={item}
              changeStatus={this.changeStatus.bind(this)}
              deleteItem={this.deleteItem.bind(this)}
              renameItem={this.renameItem.bind(this)}
            />
          ))}
        </ul>
        <Footer
          items={items}
          deleteCompleted={this.deleteCompleted.bind(this)}
          filteredItems={filteredItems}
          completeBulk={this.completeBulk.bind(this)}
        />
        <Filter changeFilter={this.changeFilter.bind(this)} />
      </div>
    );
  }
}

export default TodoList;
