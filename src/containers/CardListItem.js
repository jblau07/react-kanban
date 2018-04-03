import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEditId, deleteCard } from '../actions';

class CardListItem extends Component {
  constructor(props) {
    super (props);
    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
  }
  
  handleOnEdit() {
    this.props.setEditId(this.props.id)
  }

  handleOnDelete() {
    this.props.deleteCard(this.props.id)
  }
  
  render() {
    const { title, priority, created_by, assigned_to } = this.props
      return (
        <div className="card">
          <div className="attribute">Title: {title}</div>
          <div className="attribute">Priority: {priority}</div>
          <div className="attribute">Created By: {created_by}</div>
          <div className="attribute">Assigned To: {assigned_to}</div>
          <div className="edit-delete-buttons">
          <button className="edit-button" onClick={this.handleOnEdit}>Edit/Move</button> 
          <button className="delete-button" onClick={this.handleOnDelete}>Delete</button> 
          </div>
        </div>
      )
    }
  }

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    editId: state.cards.editId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEditId: function (id) {
      dispatch(setEditId(id))
    },
    deleteCard: function (id) {
      dispatch(deleteCard(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardListItem);


