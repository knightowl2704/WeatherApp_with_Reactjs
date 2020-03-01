import React, { useState } from 'react';

import '../css/styles.css';

function App() {
  const [count,setcount] = useState(0);
  const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  const [today,setday] = useState(day[0]);

  const reset = ()=>{
    setcount(0);
    setday(day[0]);
  }

  const increment = ()=>{
    setcount(count+1);
    if(count+1<7){
      setday(day[count+1]);
    }
    else{
      reset()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Weather App</h1>
        </p>
      </header>

      <button onClick={increment}>Next Day</button>
      <button onClick={reset}>Reset</button>

      {/* <p>{count}</p> */}
      <p className='day'>{today}</p>

    </div>
  );
}


export default App;
