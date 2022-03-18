import React from "react"
import Perguntas from "./Perguntas"
import Conclusoes from "./Conclusoes"

export default function AbrirJogo(props) {

    return (
        <div className={props.iniciarTela2}>
            <main>
                <Perguntas pergunta="Pergunta 1"/>
                <Perguntas pergunta="Pergunta 2"/>
                <Perguntas pergunta="Pergunta 3"/>
                <Perguntas pergunta="Pergunta 4"/>
                <Perguntas pergunta="Pergunta 5"/>
                <Perguntas pergunta="Pergunta 6"/>
                <Perguntas pergunta="Pergunta 7"/>
                <Perguntas pergunta="Pergunta 8"/>
                <Conclusoes />
            </main>
        </div>
    )
}