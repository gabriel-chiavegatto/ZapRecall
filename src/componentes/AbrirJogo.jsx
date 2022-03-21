import React from "react"
import Perguntas from "./Perguntas"
import Conclusoes from "./Conclusoes"

export default function AbrirJogo(props) {

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

    return (
        <div className={props.iniciarTela2}>
            <main className="todasAsPerguntas">
                <Perguntas ordinario="Pergunta 1" pergunta={questoes[0].pergunta} resposta={questoes[0].resposta}/>
                <Perguntas ordinario="Pergunta 2" pergunta={questoes[1].pergunta} resposta={questoes[1].resposta}/>
                <Perguntas ordinario="Pergunta 3" pergunta={questoes[2].pergunta} resposta={questoes[2].resposta}/>
                <Perguntas ordinario="Pergunta 4" pergunta={questoes[3].pergunta} resposta={questoes[3].resposta}/>
                <Perguntas ordinario="Pergunta 5" pergunta={questoes[4].pergunta} resposta={questoes[4].resposta}/>
                <Perguntas ordinario="Pergunta 6" pergunta={questoes[5].pergunta} resposta={questoes[5].resposta}/>
                <Perguntas ordinario="Pergunta 7" pergunta={questoes[6].pergunta} resposta={questoes[6].resposta}/>
                <Perguntas ordinario="Pergunta 8" pergunta={questoes[7].pergunta} resposta={questoes[7].resposta}/>
            </main>
                <Conclusoes />
        </div>
    )
}