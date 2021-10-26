import './App.css';
import {useState} from 'react';
import BoxForm from './components/boxForm';
import StyledBox from './components/styledBox';

function App() {
  const [boxes, setBoxes] = useState([]);

  const displayBox = (color) => {
    return < StyledBox bgColor={color}/>
  }

  return (
    <div className="App">
        <BoxForm boxes={boxes} setBoxes={setBoxes}/>
        <div className='boxes'>{
          boxes.map(displayBox)
        }</div>
    </div>
  );
}

export default App;
