import React from "react";

export default function Footer(props) {
    const { concluidos, imagens, length, parabens, puts } = props;
    
    const divImgs = imagens.map(img => <img src={img} alt="respostas" />);

    return (
        <footer className="footer">
            <div>
                <div className={parabens}>
                    <img src="./img/party.png" alt="uhul" /><span>Parabéns!</span>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
                <div className={puts}>
                    <img src="./img/sad.png" alt="vish" /><span>Putz...</span>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </div>
                <p>{concluidos}/{length} CONCLUÍDOS</p>
                <div className="checks">
                    {divImgs}
                </div>

            </div>
        </footer>
    )
}