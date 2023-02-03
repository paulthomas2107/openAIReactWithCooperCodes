import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <textarea
          placeholder="Paste your tweet here !"
          cols={59}
          rows={10}
        ></textarea>
      </div>
      <div>
        <button>Get the tweet sentiment from OpenAI API</button>
      </div>
    </div>
  );
}

export default App;
