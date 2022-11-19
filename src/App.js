import './App.css';
import {useState} from "react";
function App() {
    const [myCounter,setMyCounter] = useState(0);

    function handleClick() {
        setMyCounter(myCounter + 1);
    }

  return (
    <div className="App">
      <h1>Hello click #{myCounter}</h1>
        <button onClick={handleClick}>== {myCounter} ==</button>
    </div>
  );
}

export default App;
