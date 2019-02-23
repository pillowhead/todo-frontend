import React from "react";

function TodoItem(props) {
  const { data } = props;

  return <li className="list-group-item">{data.text}</li>;
}

export default TodoItem;
