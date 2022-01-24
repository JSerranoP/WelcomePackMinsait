import React, { useState } from "react";

const { v4 } = require('uuid');


function Form({ handleCreateMessage }) {
  const [value, setValue] = useState('');
 
  function handleSubmitForm(ev) {
    ev.preventDefault();
 
    handleCreateMessage({
      id: v4(),
      text: value,
    });
  }
 
  function handleChangeInput(ev) {
    setValue(ev.target.value);
  }
 
  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" value={value} onChange={handleChangeInput} />
      <button type="submit">Crear mensaje</button>
    </form>
  );
}

export default Form;