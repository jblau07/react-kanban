import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCard, setEditId } from '../actions';

class UpdateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', priority: '', created_by: '', assigned_to: ''}

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnCancelButton = this.handleOnCancelButton.bind(this);
  }

  componentWillUpdate(nextProps) {
    
    if (nextProps.editId !== this.props.editId) {
      this.props.cards.filter(card => {
        return card.id === nextProps.editId
      })
      .map((card) => {
        return this.setState({...card})
      })
    }
  }

  handleOnChange(event) {
    this.setState({[event.target.name] : event.target.value})
  }

  handleOnCancelButton() {
    this.props.setEditId(false)
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.updateCard(this.state);
  }

  render() {  
    //if editid is set to a number
    let editForm = 
      <div className="card-form">
        <br />
        <form onSubmit={this.handleOnSubmit}>
        <h3>Update Card</h3>
        <div className="title-input-row">
          <label>Title :</label>
          <input className="title" type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="input-row">
        <label>Priority :</label>
          <select
            name="priority"
            value={this.state.priority}
            onChange={this.handleOnChange}>

            <option value=''>Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
        </div>
        <div className="input-row">
        <label>Status :</label>
          <select
            name="status"
            value={this.state.status}
            onChange={this.handleOnChange}>

            <option value=''>Status</option>
            <option value="queue">Queue</option>
            <option value="in-progress">In-Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="input-row">
        <label>Created By :</label>
          <input type="text"
            name="created_by"
            placeholder="created_by"
            value={this.state.created_by}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="input-row">
        <label>Assigned To :</label>
          <input type="text"
            name="assigned_to"
            placeholder="assigned_to"
            value={this.state.assigned_to}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="submit-input-row">
          <button className="submit-input" type="submit" value="Submit">Submit</button>
        </div>
        <div className="submit-input-row">
        <button className="cancel-button" onClick={this.handleOnCancelButton}>Cancel</button>
        </div>
        </form>
      </div>

    if (this.props.editId) {
      return (
        editForm
      )
    } else {
      return null
    }
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
    updateCard: function (card) {
      dispatch(updateCard(card));
    },
    setEditId: function (id) {
      dispatch(setEditId(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCard);