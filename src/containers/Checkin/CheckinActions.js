const changeAddress = (e) => {
  return {
    type: 'CHANGED_ADDRESS',
    payload: e.target.value
  }
}

const addAddress = (e) => {
  return (dispatch, getState) => {
  }
}

export { changeAddress, addAddress };