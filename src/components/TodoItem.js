import React from "react";

function TodoItem(props) {
  const { data, changeStatus } = props;
  const handleChange = () => changeStatus(data.id, data.completed);

  return (
    <li className="list-group-item">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={data.completed}
          onChange={handleChange}
        />
        {data.text}
      </div>
    </li>
  );
}

export default TodoItem;
