import './App.css';
import React from "react";
import questionmark from "./images/question-mark.svg"
import baby from "./images/baby-boy.svg"
import kid from "./images/boy.svg"
import adult from "./images/man.svg"
import old from "./images/grandfather.svg"

function App() {
  let [inputAge, setInputAge] = React.useState("");
  let [inputValue, setInputValue] = React.useState("");
  let [imageValue, setImageValue] = React.useState(questionmark);
  let inputChange = (e) => {
    setInputValue(e.target.value)
    }
  let searchAPI = () => {
    fetch("https://api.agify.io?name=" + inputValue)
    .then(res => res.json())
    .then(data => {
      ageCheck(data.age) 
      setInputAge(data.age)
    })
    let ageCheck = (age) => {
      if (age <= 18 && age >= 1) {
        setImageValue(baby)
      } else if (age <=30 && age > 18) {
        setImageValue(kid)
      } else if (age <=60 && age > 30) {
        setImageValue(adult)
      } else if (age > 60) {
        setImageValue(old)
      } else {
        setImageValue(questionmark)
      }
    }
}
  return (
    <div>
      <div className="container">
        Your name:
        <input type="text" className="myInputs" id="myInput" value={inputValue} onChange={inputChange}/>
        <button onClick={searchAPI}>Guess it!</button>
        Your age: {inputAge}
        <img class="myImage" src={imageValue} />
      </div>
    </div>
  );
}

export default App;
