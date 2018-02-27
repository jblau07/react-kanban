import React from 'react';

export const CardListItem = (props) => {
  const {title, priority, status, created_by, assigned_to} = props
  return (
    <div className="card">
      <div className="attribute">Title:{title}</div>
      <div className="attribute">Priority:{priority}</div>
      {/* <div className="attribute">Status:{props.status}</div> */}
      <div className="attribute">Created By:{created_by}</div>
      <div className="attribute">Assigned To:{assigned_to}</div>
    </div>
  );
}

export default CardListItem;