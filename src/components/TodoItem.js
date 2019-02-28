import React from "react";

function TodoItem(props) {
  const { data, changeStatus, deleteItem } = props;
  const handleChange = () => changeStatus(data.id, data.completed);
  const handleDelete = () => deleteItem(data.id);

  return (
    <li className="list-group-item">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={data.completed}
          onChange={handleChange}
        />
        {" " + data.text + " "}
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
