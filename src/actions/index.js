import 'whatwg-fetch';

const KANBAN_DB = '/api/kanban';

export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_EDIT_ID = 'SET_EDIT_ID';

export const setEditId = (id) => {
  return  {
    type: SET_EDIT_ID,
    editId: id
  }
}

export const addCard = (card) => {

  return dispatch => {
    const body = {
      title: card.title,
      priority: card.priority,
      status: card.status,
      created_by: card.created_by,
      assigned_to: card.assigned_to
    }
    return fetch(KANBAN_DB, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json()
      })
      .then(card => {
        return dispatch(
          loadCards()
        )
      })

      .catch(err => {
        console.log(err);
      });
  };
}

export const loadCards = () => {
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

export const updateCard = (card) => {
  return dispatch => {
    const body = {
      title: card.title,
      priority: card.priority,
      status: card.status,
      created_by: card.created_by,
      assigned_to: card.assigned_to
    }
    return fetch(`${KANBAN_DB}/${card.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json()
      })
      .then(card => {
        dispatch({
          type: SET_EDIT_ID,
          editId: false
        })
        return dispatch(
          loadCards()
        )
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export const deleteCard = (id) => {
  return dispatch => {
    return fetch (`${KANBAN_DB}/${id}`, {
    method: 'DELETE'
  })
  .then(result => {
    return dispatch(
     loadCards()
    )
  })
  .catch(err => {
    console.log('error', err)
  })
  }  
}