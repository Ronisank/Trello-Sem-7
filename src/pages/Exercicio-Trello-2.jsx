import { useEffect, useState } from "react";

export function CarregarNoticia() {

const [noticia, setNoticia] = useState(null);

async function buscaDados() {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
    const dados = await resposta.json();
    const noticiasAleatorias = Math.floor(Math.random() * dados.items.length);
    const noticiasNovas = dados.items[noticiasAleatorias];

    setNoticia(noticiasNovas.titulo);
    setTimeout(buscaDados, 8000);
}

useEffect(() => {
    buscaDados();
}, []);

return (
  <>
      <h2>Notícias</h2>
    <div className="container-fluid text-bg-info p-3">
      <p>{noticia}</p>
    </div>
  </>
);
}
