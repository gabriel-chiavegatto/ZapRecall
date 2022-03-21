import React from "react";
export default function Perguntas(props) {

    let desempenho;
    const { ordinario, pergunta, resposta } = props;
    const [stage, setStage] = React.useState("stage1");
    const [contStage1, setContStage1] = React.useState("conteudo-stage1");
    const [contStage2, setContStage2] = React.useState("conteudo-stage2 escondido");
    const [contStage3, setContStage3] = React.useState("conteudo-stage3 escondido");
    const [contStage4, setContStage4] = React.useState("conteudo-stage4 escondido");

    function abrirPergunta() {
        setStage("stage2");
        setContStage1("conteudo-stage1 escondido");
        setContStage2("conteudo-stage2");
    }
    function mostrarResposta() {
        setStage("stage3");
        setContStage2("conteudo-stage2 escondido");
        setContStage3("conteudo-stage3");
    }
    function gravarDesempenho(imagem) {
        setStage("stage4");
        setContStage3("conteudo-stage3 escondido");
        setContStage4("conteudo-stage4");
        desempenho = imagem;
    }

    return (
        <section className={stage}>
            <div className={contStage1}>
                <p className="ordem" >{ordinario}</p>
                <img onClick={abrirPergunta} className="play" src="./img/Vector.png" alt="logo"></img>
            </div>
            <div className={contStage2}>
                <p> {pergunta} </p>
                <img onClick={mostrarResposta} className="virar-a-resposta" src="./img/virar.png" alt="virar" />
            </div>
            <div className={contStage3}>
                <p> {resposta} </p>
                <div className="pontuacao">
                    <button onClick={() => gravarDesempenho("'./img/acertou.png'")} className="ruim">Não lembrei</button>
                    <button onClick={() => gravarDesempenho("'./img/acertou.png'")} className="medio">Quase não lembrei</button>
                    <button onClick={() => gravarDesempenho("'./img/acertou.png'")} className="bom">Zap!</button>
                </div>
            </div>
            <div className={contStage4}>
                <p>{ordinario}</p>
                <img src={desempenho} alt="Seu desempenho" />
            </div>

        </section>
    )
}