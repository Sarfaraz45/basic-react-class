import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Hello from './Hello'
import './style.css'

function App({myName, age}){
  return <div id ="main">
  <p className="first">
    Hello World! My name is :  <strong className="myName1">{myName}</strong> </p>
    
    <h2 className="city">Pakistan's Top Three Cities</h2>
    <ol className="list">
    <li>Karachi</li>
    <li>Lahore</li>
    <li>Islamabad</li>
    </ol>
    <br />
    

    <p className="age">My age is {age - 15}. After five Year I will be { 30 + 5} </p>
  
  
  </div>
}


export default App;
