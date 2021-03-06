import React, { Component } from "react";
import KeyCode from "keycode-js";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: props.option,
      value: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  clear() {
    this.setState({ value: "" });
  }

  handleKeyUp(e) {
    const text = this.state.value.trim();

    if (this.state.option === "new") {
      const addNew = this.props.addNew;

      if (e.keyCode === KeyCode.KEY_RETURN && text) {
        addNew(text);
        this.clear();
      }
    } else if (this.state.option === "rename") {
      const renameItem = this.props.renameItem;
      const id = this.props.id;

      if (e.keyCode === KeyCode.KEY_RETURN && text) {
        renameItem(id, text);
      }
    }
  }

  render() {
    const message = this.props.message;

    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onKeyUp={this.handleKeyUp.bind(this)}
          onChange={this.handleChange.bind(this)}
          placeholder={message}
        />
      </div>
    );
  }
}

export default InputForm;
