
import { ADD_INPUT, NEXT, PREV, SHOW_ALERT, REMOVE_ALERT, MAIN_PAGE, SUCCESS, SET_LOADING } from "./types";


const formReducer = (state, action) => {
  switch(action.type){
    case ADD_INPUT:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      }
    case NEXT:
      return {
        ...state,
        step: state.step + 1
      }
    case PREV:
      return {
        ...state,
        step: state.step - 1
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
        
      }
    case SUCCESS:
      return {
        ...state,
        loading: false,
        step: state.step +1
      }
    case MAIN_PAGE:
      return {
        step:1,
        loading: false,
        error: null,
        showError: false,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
      }
    case SHOW_ALERT:
      return {
        ...state,
        error: action.payload,
        showError: true 
      }
    case REMOVE_ALERT:
      return {
        ...state,
        error: null,
        showError: false
      }

    default:
      return state
  }

}

export default formReducer;