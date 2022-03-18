import React from "react"
import Perguntas from "./Perguntas"

export default function AbrirJogo(props) {

    return (
        <div className={props.iniciarTela2}>
            <main>
                <Perguntas />
                <Perguntas />
                <Perguntas />
                <Perguntas />
                {/* <Conclusoes /> */}
            </main>
        </div>
    )
}