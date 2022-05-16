import React from "react";

export default function Footer(props) {
    const { concluidos, imagens, length, parabens, puts, reiniciar } = props;

    const divImgs = imagens.map((img, index) => <img src={img} alt="respostas" key={index} />);

    return (
        <footer className="footer">
            <div>
                <div className={parabens}>
                    <img src="./img/party.png" alt="uhul" /><span> Parabéns!</span>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
                <div className={puts}>
                    <img src="./img/sad.png" alt="vish" /><span> Putz...</span>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </div>
                <p>{concluidos}/{length} CONCLUÍDOS</p>
                <div className="checks">
                    {divImgs}
                </div>
                <div className="flex-reinicio">
                    <button onClick={()=>{window.location.reload();console.log('reload foi')}} className={reiniciar}>REINICIAR RECALL</button>
                </div>
            </div>
        </footer>
    )
}