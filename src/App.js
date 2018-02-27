import React, { Component } from 'react';
// import './style.css';
import { connect } from 'react-redux';
import './index.css';
import { loadCards } from '../src/actions/index';
import CardList from '../src/components/CardList';
import NewCard from '../src/components/NewCard';

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
      <h1>Kanban  </h1>
        <NewCard/>
      </header>
        <div className="Main">
          <div className="Queue">
          <h1>Queue</h1>
          <CardList
          cards={this.props.cards} />
          </div>
          <div className="In-Progress">
          <h1>In-Progress</h1>
          </div>
          <div className="Done">
          <h1>Done</h1>
          </div>        
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
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
