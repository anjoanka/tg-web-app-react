import './App.css';
import React, {useEffect} from 'react';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () =>{
    tg.close();
  }

  return (
    <div className="App">
      <h1>Hello</h1>

      <button onClick={onClose}>Закрити</button>
    </div>
  );
}

export default App;
