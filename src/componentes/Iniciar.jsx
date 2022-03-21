import React from "react";
import Header from "./Header.jsx"
import Jogo from "./Jogo"

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
                <Header banner={banner} bannerFlex={bannerFlex}/> 
                <button className={iniciar} onClick={trocarTela}>Iniciar Recall</button>
                <Jogo iniciarTela2={tela2} />
            </div>
        </main>
    )
}

