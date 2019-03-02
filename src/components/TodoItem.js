import React from "react";
import InputForm from "./InputForm";

function TodoItem(props) {
  const { data, changeStatus, deleteItem, renameItem } = props;
  const handleChange = () => changeStatus(data.id, data.completed);
  const handleDelete = () => deleteItem(data.id);

  const renameMessage = "Rename to...";

  return (
    <li className="list-group-item">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={data.completed}
          onChange={handleChange}
        />

        {"  " + data.text + "  "}

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDelete}
        >
          Delete
        </button>

        <InputForm
          option="rename"
          renameItem={renameItem}
          message={renameMessage}
          id={data.id}
        />
      </div>
    </li>
  );
}

export default TodoItem;
