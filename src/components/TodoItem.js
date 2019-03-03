import React from "react";
import InputForm from "./InputForm";

function TodoItem(props) {
  const {
    data, // one single item
    changeStatus,
    deleteItem,
    renameItem,
    updateRenameId,
    renameId
  } = props;
  const handleChange = () => changeStatus(data.id, data.completed);
  const handleDelete = () => deleteItem(data.id);
  const handleRename = () => updateRenameId(data.id);

  const renameMessage = "Rename to...";

  const renameCode =
    data.id === renameId ? (
      <InputForm
        option="rename"
        renameItem={renameItem}
        message={renameMessage}
        id={data.id}
      />
    ) : null;

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
          className="btn btn-outline-warning"
          onClick={handleRename}
        >
          Rename
        </button>

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDelete}
        >
          Delete
        </button>

        {/* renameCode only appears after clicking on Rename button */}
        {renameCode}
      </div>
    </li>
  );
}

export default TodoItem;
