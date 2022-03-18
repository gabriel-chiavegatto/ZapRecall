import React from "react"
import Perguntas from "./Perguntas"

export default function AbrirJogo(props) {

    return (
        <div className={props.iniciarTela2}>
            <main>
                <Perguntas pergunta="Pergunta 1"/>
                <Perguntas pergunta="Pergunta 2"/>
                <Perguntas pergunta="Pergunta 3"/>
                <Perguntas pergunta="Pergunta 4"/>
                {/* <Conclusoes /> */}
            </main>
        </div>
    )
}