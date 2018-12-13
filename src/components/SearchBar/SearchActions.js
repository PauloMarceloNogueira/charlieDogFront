import axios from 'axios';

const URL = 'http://localhost:3003';

const search_changed = (e) => {
  return {
    type: 'SEARCHED',
    payload: e.target.value
  }
}

const search_success = (response) => {
  return {
    type: 'SEARCH_SUCCESS',
    payload: response
  }
}

const search_clicked = (e) => {
  console.log('Entrou click');
  return (dispatch, getState) => {
    axios.get(`${URL}/dogs`)
      .then((response) => {
        const dog_filtered = response.data
          .filter(result => result.name.toLowerCase() === getState().input.value.toLowerCase());
        dispatch(search_success(dog_filtered))
      })
  }
}

export { search_changed, search_clicked, search_success };