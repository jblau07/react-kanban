import React from 'react';

export const CardListItem = (props) => {
  return (
    <div className="card">
      <div className="attribute">Title:{props.title}</div>
      <div className="attribute">Priority:{props.priority}</div>
      {/* <div className="attribute">Status:{props.status}</div> */}
      <div className="attribute">Created By:{props.created_by}</div>
      <div className="attribute">Assigned To:{props.assigned_to}</div>
    </div>
  );
}

export default CardListItem;