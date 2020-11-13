import { useState } from 'react';
import './App.css';
import FreshChatComponent from './FreshChat';

function App() {
  const [activeFreshChat, setActiveFreshChat] = useState('cliente');

  function handleChangeFreshChat() {
    if (activeFreshChat === 'engage') {
      setActiveFreshChat('cliente');
    } else {
      setActiveFreshChat('engage');
    }
  }

  return (
    <div className="App">
      <h1>Hello,world</h1>
      {/* Mercedes */}
      {activeFreshChat === 'cliente' && <FreshChatComponent token="e2a4d65e-2a30-46d7-8e35-bfc37bf8f73a"/>}
      {/* Engage */}
      {activeFreshChat === 'engage' && <FreshChatComponent token="a00a4733-4168-4abd-a9f6-5e9375228b09" />}

      <button onClick={handleChangeFreshChat}>change</button>
    </div>
  );
}

export default App;
