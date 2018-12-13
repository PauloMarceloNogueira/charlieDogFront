import axios from 'axios';

const URL = 'http://ec2-204-236-249-146.compute-1.amazonaws.com:3003/';

const search_changed = (e) => {
  return {
    type: 'SEARCHED',
    payload: e.target.value
  }
}

const search_success = (response) => {
  console.log(response, 'Response');
  return {
    type: 'SEARCH_SUCCESS',
    payload: response
  }
}

const filtered = (e) => {
  console.log('fitered')
  return (dispatch, getState) => {
    axios.get(`${URL}/dogs/size/${e.target.getAttribute('data-size')}`)
      .then((response) => {
        const dog_filtered = response.data
        dispatch(search_success(dog_filtered))
      })
  }
}

const filteredByValue = (e) => {
  return (dispatch, getState) => {
    axios.get(`${URL}/dogs/value/${e.target.getAttribute('data-valueMin')}/${e.target.getAttribute('data-valueMax')}`)
      .then((response) => {
        const dog_filtered = response.data
        dispatch(search_success(dog_filtered))
      })
  }
}

const search_clicked = (e) => {
  return (dispatch, getState) => {
    axios.get(`${URL}/dogs`)
      .then((response) => {
        const dog_filtered = response.data
          .filter(result => result.name.toLowerCase() === getState().input.value.toLowerCase());
        dispatch(search_success(dog_filtered))
      })
  }
}

export { search_changed, search_clicked, search_success, filtered, filteredByValue};