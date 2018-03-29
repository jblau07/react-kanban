import React, { Component } from 'react';
// import './style.css';
import { connect } from 'react-redux';
import './index.css';
import { loadCards } from '../src/actions';
import CardList from './components/CardList';
import NewCard from './containers/NewCard';
import UpdateCard from './containers/UpdateCard';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCards()
  }

  render() {
    return (
      <div className="App">
      <header className="App-title">
      <h1>React-Kanban  </h1>
        <NewCard/>
        <UpdateCard 
       />
      </header>
        <div className="Main">
          <div className="QueueColumn">
          <h1 className="queue-header">Queue</h1>
          <CardList
            cards={this.props.cards} status='queue'
          />
          </div>
          <div className="In-ProgressColumn">
          <h1 className="in-progress-header">In-Progress</h1>
          <CardList
            cards={this.props.cards} status="in-progress"
          />
          </div>
          <div className="DoneColumn">
          <h1 className="done-header">Done</h1>
          <CardList
            cards={this.props.cards} status="done"
          />
          </div>        
        </div>
      </div>
    );
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
    loadCards: function () {
      dispatch(loadCards());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
