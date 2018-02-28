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
      <div>
        <br />
        <form onSubmit={this.handleOnSubmit}>
        <h3>New Task</h3>
          <input type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
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
          <select
            name="status"
            value={this.state.status}
            onChange={this.handleOnChange}>

            <option value=''>Status</option>
            <option value="queue">Queue</option>
            <option value="in-progress">In-Progress</option>
            <option value="done">Done</option>
          </select>
          <input type="text"
            name="created_by"
            placeholder="created_by"
            value={this.state.created_by}
            onChange={this.handleOnChange}
          />
          <input type="text"
            name="assigned_to"
            placeholder="assigned_to"
            value={this.state.assigned_to}
            onChange={this.handleOnChange}
          />
          <input type="submit" value="Submit" />
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