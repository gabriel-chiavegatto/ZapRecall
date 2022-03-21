import React from "react";
export default function Header(props) {

    const [iniciar, setIniciar] = React.useState("botao-iniciar");
    const [banner, setBanner] = React.useState("banner-t1");
    // const { abrirTela2 } = props;
    function trocarTela() {
        setIniciar("escondido");
        setBanner("banner-t2");
        setBannerFlex("banner-flex");
        
    }
    const [bannerFlex, setBannerFlex] = React.useState("");
    return (
        <>
            <div className={banner}>
                <div className={bannerFlex}>
                    <img className="logo" src="./img/logo.png" alt="logo" ></img>
                    <h1 className="nome-app">ZapRecall</h1>
                </div>
            </div>
            <button className={iniciar} onClick={trocarTela}>Iniciar Recall</button>
        </>
    )
}