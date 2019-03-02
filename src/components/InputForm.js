import React, { Component } from "react";
import KeyCode from "keycode-js";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: props.option || "new",
      value: props.value || ""
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
    } else {
      const renameItem = this.props.renameItem;
      const id = this.props.id;

      if (e.keyCode === KeyCode.KEY_RETURN && text) {
        renameItem(id, text);
        this.clear();
      }
    }
  }

  render() {
    const addNewMessage = this.props.addNewMessage;

    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onKeyUp={this.handleKeyUp.bind(this)}
          onChange={this.handleChange.bind(this)}
          placeholder={addNewMessage}
        />
      </div>
    );
  }
}

export default InputForm;
