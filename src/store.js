import {createStore} from 'redux';
import {connect} from 'react-redux';

const initialState = {
inputValue: ''
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return Object.assign({}, state, {inputValue: action.text}); //text es la segunda llave del la comst action n InputMirror
      case 'INPUT_RESET':
        return Object.assign({}, state, {inputValue: ''});
    default:
      return state
  }
}

const store = createStore(reducer); //se crea un store a través de createStore (hay que importarlo antes) y le se pasa como argumento la const reducer (que es la funcion reductiva)

export default store;
