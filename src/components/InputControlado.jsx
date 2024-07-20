import { useState } from 'react';

function InputControlado() {
const [text, setText] = useState('');

  return (
  <>
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />

    <p>Você está digitando: {text}</p>
  </>
  );
}

export default InputControlado;
