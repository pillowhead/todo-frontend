import React, { Component } from "react";
import KeyCode from "keycode-js";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { addNew } = this.props;
    const text = this.state.value.trim();

    if (e.keyCode === KeyCode.KEY_RETURN && text) {
      addNew(text);
      this.clear();
    }
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onKeyUp={this.handleKeyUp.bind(this)}
          onChange={this.handleChange.bind(this)}
          placeholder="Add new task..."
        />
      </div>
    );
  }
}

export default InputForm;
