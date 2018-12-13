import axios from 'axios';
const URL = 'http://localhost:3003';

const add_to_cart = (e) => {
  return (dispatch, getState) => {
    console.log('entrou aqui');
    axios.get(`${URL}/dogs/${e.target.dataset.dogid}`)
      .then((response) => {
        dispatch(add_to_cart_success(response.data[0]))
        return response.data[0].value
      })
  }
}

const add_to_cart_success = (response) => {
  return {
    type: 'ADD_TO_CART',
    payload: response
  }
}

export {add_to_cart}