import React from 'react';
import {connect} from 'react-redux';

const Input = (props) => {
  return(
    <div>
      <input value = {props.inputValue} onChange={props.inputChanged} />
    </div>
  );
}

// <p>{props.inputValue}</p>

const mapStateToProps = (state) =>{ //con state ci si riferisce automaticamente al state del return nel reducer (in store.js)
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (event) => {
      console.log('changed', event.target.value);
      const action = {type: 'INPUT_CHANGE', text: event.target.value}
      dispatch(action);
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Input);
