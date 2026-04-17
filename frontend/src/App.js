import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8090/hello")
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error("Erreur API :", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>Réponse du backend :</h2>
        <p>{message}</p>

      </header>
    </div>
  );
}

export default App;