// src/App.js
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка для відправки даних
    alert('Форма відправлена');
  };

  return (
    <div className="App">
      <h1>Заповніть форму</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ваше ім'я" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Ваш email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default App;
