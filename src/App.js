import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  
    state ={
    value1 :  Math.floor(Math.random() * 100),
    value2:  Math.floor(Math.random() * 100),
    value3:  Math.floor(Math.random() * 100),
    proposedAnswer(){
      return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
    },
    numQuestions: 0,
    numCorrect: 0
  }
  
 
  // if(proposed === sumOfValuesByHand){
  //   console.log("sure people")
  // } else {
  //   console.log("wrong")
  // }
   handleCorrect(){
     this.setState(prevState => {
       const sumOfValuesByHand = prevState.value1 + prevState.value2 + prevState.value3
       const proposed = prevState.proposedAnswer();
      const newValue1 = Math.floor(Math.random() * 100)
      const newValue2 = Math.floor(Math.random() * 100)
      const newValue3 = Math.floor(Math.random() * 100)
       if(proposed === sumOfValuesByHand){

        return {
          value1 : newValue1,
        value2 : newValue2,
        value3 : newValue3,
        numQuestions : prevState.numQuestions + 1,
        numCorrect: prevState.numCorrect + 1
        }
       
        }
        else {
          return {
            value1 : newValue1,
            value2 : newValue2,
            value3 : newValue3,
            numQuestions : prevState.numQuestions + 1,
            numCorrect: prevState.numCorrect
          }

        }
       }
  
     )
   }
 

   handleWrong(){
    this.setState(prevState => {
      const sumOfValuesByHand = prevState.value1 + prevState.value2 + prevState.value3
      const proposed = prevState.proposedAnswer();
     const newValue1 = Math.floor(Math.random() * 100)
     const newValue2 = Math.floor(Math.random() * 100)
     const newValue3 = Math.floor(Math.random() * 100)
      if(proposed !== sumOfValuesByHand){

       return {
         value1 : newValue1,
       value2 : newValue2,
       value3 : newValue3,
       numQuestions : prevState.numQuestions + 1,
       numCorrect: prevState.numCorrect + 1
       }
      
       }
       else {
         return {
           value1 : newValue1,
           value2 : newValue2,
           value3 : newValue3,
           numQuestions : prevState.numQuestions + 1,
           numCorrect: prevState.numCorrect
         }

       }
      }
 
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
   
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer()}`}</p>
			</div>
          <button onClick={() => this.handleCorrect()}>True</button>
          <button onClick={() => this.handleWrong()}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>

        </div>
      </div>
    );
  }
}

export default App;
