import React from "react";
export default function Perguntas(props) {

    const { ordinario, pergunta, resposta } = props;
    const [stage, setStage] = React.useState("stage1");

    function mudarStage() {
        if (stage === "stage1") {
            setStage("stage2");
        } if (stage === "stage2") {
            setStage("stage3");
        } if (stage === "stage3") {
            setStage("stage4");
        }
    }

    return (
        <section className={stage}>
            <div className="conteudo-stage1">
                <p className="ordem" >{ordinario}</p>
                <img onClick={mudarStage} className="play" src="./img/Vector.png" alt="logo"></img>
            </div>
            <div className="conteudo-stage2">
                <p> {pergunta} </p>
            </div>
            <div className="conteudo-stage3">
                <p> {resposta} </p>
                <div className="pontuacao">
                    <button className="ruim">Não lembrei</button>
                    <button className="medio">Quase não lembrei</button>
                    <button className="bom">Zap!</button>
                </div>
            </div>
            <div className="conteudo-stage4">
                <p>{ordinario}</p>
                {/* <img src="" alt="Sua pontuação" /> */}
            </div>

        </section>
    )
}