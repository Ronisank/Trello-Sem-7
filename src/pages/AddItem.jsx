import React, { useState } from "react";

function AdicionarItem() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (name) {
      setLista((listaPre) => {
        return [...lista, name];
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="row g-3">
        <input
          type="text"
          placeholder="Digite seu nome aqui"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary">Listar</button>
      </form>

      <h4>Lista de nomes:</h4>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AdicionarItem;
