import React from "react";
export default function Perguntas(props) {
    const { pergunta } = props;
    const [stage, setStage] = React.useState("stage1")

    function virarPergunta() {
        setStage("stage2");
        verificarStage();
    }
    function verificarStage() {
        if (stage === "stage1") {

        } if (stage === "stage2") {

        } if (stage === "stage2") {

        }

    }
    return (
        <section className="caixa-perguntas">
            <div className="perguntasStage1">
                <p>{pergunta}</p>
                <img onClick={virarPergunta} className="play" src="./img/Vector.png" alt="logo"></img>
            </div>
        </section>
    )
}