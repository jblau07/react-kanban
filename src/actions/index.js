import 'whatwg-fetch';

const KANBAN_DB = '/api/kanban';

export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';

export const addCard = (card) => {

  return dispatch => {
    const body = {
      title: card.title,
      priority: card.priority,
      status: card.status,
      created_by: card.created_by,
      assigned_to: card.assigned_to
    }
    console.log('body', body);
    return fetch(KANBAN_DB, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log('add', response)
        return response.json()
      })
      .then(card => {
        return dispatch({
          type: ADD_CARD,
          card: card
        })
      })

      .catch(err => {
        console.log(err);
      });
  };
}



export const loadCards = () => {
  console.log('yoyoy');
  return dispatch => {
    return fetch(KANBAN_DB)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json
      })
      .then(cards => {
        return dispatch({
          type: LOAD_CARDS,
          cards: cards
        })
      })
      .catch(err => {
        console.log('error', err);
        return dispatch({
          type: LOAD_CARDS,
          cards: []
        });
      });
  }
}