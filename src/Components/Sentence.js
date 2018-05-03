import React, { Component } from 'react';
import store from '../store';
import './Sentence.css';
import {connect} from 'react-redux';

class Sentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    }
    this.store = this.props.store;
    this.generateArray = this.generateArray.bind(this);
    this.hola = this.hola.bind(this);

  }

  textParagraph(){
    if (this.store.getState().inputValue) {
        return this.store.getState().inputValue
      } else {
        return 'Hola, escribe algo'
      }
    }

    generateArray(){
      const array = this.state.array;
      if (this.store.getState().inputValue) {
          const a = this.store.getState().inputValue.toString();
          //const b = a + ', '; como alternativa
          const b = <p id="p"> {a} </p>;
          array.push(b);
          return array;
        } else {
          return array;
        }
      }

    hola(){
      return console.log('Hola');
    }


      render() {
        return (
          <div>
            <button type="button" name="button" onClick={(event) => {this.generateArray(); this.props.inputReset();     this.hola()}}>Push</button>
            <p>{this.textParagraph()}</p>
            <p>{this.state.array}</p>
          </div>
          )
        }
      }

      const mapStateToProps = (state) =>{ //con state ci si riferisce automaticamente al state del return nel reducer (in store.js)
        return {
          inputValue: state.inputValue
        }
      }


      const mapDispatchToProps = (dispatch) => {
        return {
          inputReset: (event) => {
        console.log('INPUT_RESET');
            const action = {type: 'INPUT_RESET', text: ''}
            dispatch(action);
          }
        }
      }


  export default connect(mapStateToProps, mapDispatchToProps)(Sentence);

//Al valor de inputValue definido en Input.js llega la contrarespuesta desde el componente Sentence.js, que quiere que, al pulsar de butonn push, inputValue sea igual a ''. A diferencia de Input, que es un componente presentacional (no tiene costructor ni state, tiene solo return), Sentence es una clase porque tiene un estado (array). Viene puesto en redux solo el estado de inputValue porque desde su valor dependen todos los componentes. El estado de array, en cambio, no affecta a nada.
