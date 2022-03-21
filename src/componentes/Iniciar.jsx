import React from "react";
import AbrirJogo from "./AbrirJogo"

export default function Iniciar() {

    const [iniciar, setIniciar] = React.useState("botao-iniciar");
    const [bannerFlex, setBannerFlex] = React.useState("");
    const [tela2, setTela2] = React.useState("escondido");
    const [banner, setBanner] = React.useState("banner-t1");

    function trocarTela() {
        setIniciar("escondido");
        setBanner("banner-t2");
        setBannerFlex("banner-flex");
        setTela2("");
    }

    return (
        <main className="tela">
            <div>
                <div className={banner}>
                    <div className={bannerFlex}>
                        <img className="logo" src="./img/logo.png" alt="logo" ></img>
                        <h1 className="nome-app">ZapRecall</h1>
                    </div>
                </div>
                <button className={iniciar} onClick={trocarTela}>Iniciar Recall</button>
                <AbrirJogo iniciarTela2={tela2} />
            </div>
        </main>
    )
}

