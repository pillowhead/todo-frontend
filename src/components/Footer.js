import React from "react";

function Footer(props) {
  const { items, deleteCompleted, filteredItems, completeBulk } = props;

  const totalCount = items.length;

  let completedCount = 0;
  items.map(item => (item.completed ? completedCount++ : null));

  const handleCompleteBulk = () => completeBulk(filteredItems);
  const handleDeleteCompleted = () => deleteCompleted(items);

  return (
    <div className="card-footer">
      <strong>{totalCount}</strong>
      {" in total & "}
      <strong>{completedCount}</strong>
      {" completed."}
      <div className="right-button">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleCompleteBulk}
        >
          Complete Visible
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteCompleted}
        >
          Delete Completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
