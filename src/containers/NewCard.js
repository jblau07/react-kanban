import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', priority: '', status: '', created_by: '', assigned_to: '' }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

  }

  handleOnChange(event) {
    this.setState({[event.target.name] : event.target.value})
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addCard(this.state);
    this.setState({ title: '', priority: '', status: '', created_by: '', assigned_to: '' });
  }

  render() {
    return (
      <div className="card-form">
        <br />
        <form onSubmit={this.handleOnSubmit}>
        <h3>Add New Card</h3>
        <div className="title-input-row">
          <label>Title :</label>
          <input className="title" type="text"
            name="title"
            placeholder="title"
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
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: function (card) {
      dispatch(addCard(card));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);