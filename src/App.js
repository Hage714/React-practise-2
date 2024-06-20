import './App.css';
import Greeting from './components/Greeting';
import FindSum from './components/FindSum';
import MakeButton from './components/MakeButton';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const full_name = "Abdul Doe";
  let x = 10;
let y = 20;

const [currentText, setCurrentText] = useState("Stoney")
const [count, setCount] = useState(0);


const changeButtonText = () => {
  setCurrentText(prevText => prevText === "Stoney" ? "Fanta" : "Stoney")

};

const increaseCountButton = () => {
  setCount(count + 1)
  console.log("Button Clicked!!")
}

const decreaseCountButton = () => {
  setCount(count - 1)
}


  return (
    <div className="App">
        <Greeting full_name={full_name} />  
          <FindSum x={x} y={y} />
          <MakeButton buttonText={currentText} changeButtonText={changeButtonText}/>
          <Counter increaseCountButton={increaseCountButton} decreaseCountButton={decreaseCountButton}  count={count} />
    </div>
  )
}



export default App;
