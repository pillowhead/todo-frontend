import React from "react";

function Footer(props) {
  const { items } = props;

  const totalCount = items.length;

  let completedCount = 0;
  items.map(item => (item.completed ? completedCount++ : null));

  return (
    <div className="card-footer">
      <strong>{totalCount}</strong>
      {" items in total and "}
      <strong>{completedCount}</strong>
      {" items completed."}
    </div>
  );
}

export default Footer;
