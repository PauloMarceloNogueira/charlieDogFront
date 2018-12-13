export default (state = {}, action ) => {
  switch(action.type) {
    case 'SEARCHED':
      return {
        ...state,
        value: action.payload
      }
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        data: action.payload
      }
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          data: action.payload
        }
      ]
      case 'CHANGED_ADDRESS':
      return {
        checkin: {
          address: action.payload
        }
      }
    default:
      return state;
  }
}