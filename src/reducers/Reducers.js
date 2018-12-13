export default (state = {}, action, cart_value ) => {
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
    case 'CHANGE_FORM_NAME':
      return [
        ...state,
        {
          form: {
            name: action.payload
          }
        }
      ]
    
      case 'CHANGE_FORM_ADDRESS':
      return [
        ...state,
        {
          form: {
            address: action.payload
          }
        }
      ]
    default:
      return state;
  }
}