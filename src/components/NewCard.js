import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', priority: '', status: '', created_by: '', assigned_to: '' }

    this.handleOnTitle = this.handleOnTitle.bind(this);
    this.handleOnPriority = this.handleOnPriority.bind(this);
    this.handleOnStatus = this.handleOnStatus.bind(this);
    this.handleOnCreated = this.handleOnCreated.bind(this);
    this.handleOnAssigned = this.handleOnAssigned.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleOnPriority(event) {
    this.setState({ priority: event.target.value });
  }

  handleOnStatus(event) {
    this.setState({status: event.target.value});
  }

  handleOnCreated(event) {
    this.setState({ created_by: event.target.value });
  }

  handleOnAssigned(event) {
    this.setState({ assigned_to: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log('add state state',this.state);
    this.props.addCard(this.state);
    this.setState({ title: '', priority: '', status: '', created_by: '', assigned_to: '' });
  }

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleOnSubmit}>
          <input type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleOnTitle}
          />
          <select
            name="priority"
            value={this.state.priority}
            onChange={this.handleOnPriority}>

            <option value=''>Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
          <select
            name="status"
            value={this.state.status}
            onChange={this.handleOnStatus}>

            <option value=''>Status</option>
            <option value="queue">Queue</option>
            <option value="in-progress">In-Progress</option>
            <option value="done">Done</option>
          </select>
          <input type="text"
            name="created_by"
            placeholder="created_by"
            value={this.state.created_by}
            onChange={this.handleOnCreated}
          />
          <input type="text"
            name="assigned_to"
            placeholder="assigned_to"
            value={this.state.assigned_to}
            onChange={this.handleOnAssigned}
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