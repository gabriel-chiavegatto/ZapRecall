import React from "react";
import AbrirJogo from "./AbrirJogo"

export default function Iniciar() {

    const [iniciar, setIniciar] = React.useState("botao-iniciar");
    const [banner, setBanner] = React.useState("");
    const [tela2, setTela2] = React.useState("escondido");

    function trocarTela() {
        setIniciar("escondido")
        setBanner("banner-flex");
        setTela2("");   
    }

    return (
        <main>
            <div className={banner}>
                <img className="logo" src="./img/logo.png" alt="logo" ></img>
                <h1 className="nome-app">ZapRecall</h1>
            </div>
            <button className={iniciar} onClick={trocarTela}>Iniciar Recall</button>
            <AbrirJogo iniciarTela2={tela2} />
        </main>
    )
}

