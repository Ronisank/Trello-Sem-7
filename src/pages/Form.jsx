import { useEffect, useState } from "react";

function Trello(){
const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: ''
});
const [mensagem, setMensagem] = useState(null);

useEffect(() => {
    const isError = Object.values(formData).reduce((acc, item) => {
        if(!item) acc += 1; 
            return acc
    },0);

   if(isError > 0){
       setMensagem('Preencha todos os campos');
    }else{
        setMensagem(null);
    } 


},[formData]);

    return (
        <div >      
            <form>
                <input type="text" onChange={(e) => setFormData(prevState=>({...prevState, nome: e.target.value}))} placeholder="Nome" />
                <input type="text" onChange={(e) => setFormData(prevState=>({...prevState, email: e.target.value}))} placeholder="Email" />
                <input type="text" onChange={(e) => setFormData(prevState=>({...prevState, idade: e.target.value}))} placeholder="Idade" />
                
            <button>Cadastrar</button>
            </form>

            <span>{mensagem}</span>
        </div>
    )
}

export default Trello;