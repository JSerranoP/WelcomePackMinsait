import React, { useState } from "react";

import List from './components/List';
import Form from './components/Form/Form';

import './App.css';

function App() {
  const [messageList, setMessageList] = useState([
    { id: 1, text: 'Hello World' },
    { id: 2, text: 'Welcome to Upgrade Hub' },
    { id: 3, text: 'Learn React' },
  ]);

  function handleAddMessage(newMessage) {
    setMessageList([...messageList, newMessage]);
  }

  return (
    <div className="App">
      <h1>Mostramos la lista de mensajes:</h1>
      <Form handleCreateMessage={handleAddMessage} />
      <List list={messageList} />
    </div>
  );
}

export default App;