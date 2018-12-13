import axios from 'axios';
const URL = 'http://localhost:3003';

const Form_name = (e) => {
  return {
    type: 'CHANGE_FORM_NAME',
    payload: e.target.value
  }
}

const Form_address = (e) => {
  return {
    type: 'CHANGE_FORM_ADDRESSS',
    payload: e.target.value
  }
}

export { Form_name, Form_address }