import './App.css';
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0)

  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Counter App</h1>
      
      <div className="counter" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
        <button onClick={() => {
          setNum(prev => {
            if (prev > 0) {
              return prev - 1;
            }
            return prev;
          });
        }}>-</button>
        
        <h2 style={{color: 'blue'}}>{num}</h2>
        
        <button onClick={() => {
          setNum(prev => {
            return prev + 1;
          });
        }}>+</button>
      </div>

    </div>
  );
}

export default App;

