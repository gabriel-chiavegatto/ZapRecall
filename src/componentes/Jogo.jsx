import React from "react"
import Perguntas from "./Perguntas"
import Footer from "./Footer";

export default function Jogo(props) {

    const questoes = [{
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript"
    },
    {
        pergunta: "O React é __ ",
        resposta: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __",
        resposta: "letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX ",
        resposta: "expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __",
        resposta: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta: "Usamos o npm para __",
        resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes"
    },
    {
        pergunta: "Usamos estado (state) para __",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }];

    const randomArray = questoes.sort(embaralhar);
    function embaralhar() {
        return Math.random() - 0.5;
    }
    
    const [arrayImgs, setArrayImgs] = React.useState([]);
    const [concluidos, setConcluidos] = React.useState(0);        
    function desempenho(imagem) {
        const arrayAtualizado = [...arrayImgs, imagem];
        setConcluidos(concluidos + 1);
        setArrayImgs(arrayAtualizado);
        verificarFim(arrayAtualizado);
    }

    const [parabens, setParabens] = React.useState("nivel escondido");
    const [puts, setPuts] = React.useState("nivel escondido");
    function verificarFim(arrayAtualizado) {
        if (arrayAtualizado.length === questoes.length) {
            console.log("foi");
            const filtro = arrayAtualizado.filter(img => img === "./img/errou.png");
            if (filtro.length > 0) {
                console.log("rodei aq no maior que zero");
                setPuts("nivel");
            } else { console.log("rodei aq no igual a zero"); setParabens("nivel") }
        } else { console.log("ueeeee") }
    }
    
    const cadaPergunta = randomArray.map((pergunta,index)=> listar(pergunta,index));
    function listar(pergunta, index) {
        return (<Perguntas ordinario={`Pergunta ${index+1}`} pergunta={pergunta.pergunta} resposta={pergunta.resposta} desempenho={desempenho} key={index}/>)
    }

    return (
        <div className={props.iniciarTela2}>
            <main className="todas-as-perguntas">
                {cadaPergunta}
            </main>
            <Footer concluidos={concluidos} imagens={arrayImgs} length={questoes.length} parabens={parabens} puts={puts} />
        </div>
    )
}