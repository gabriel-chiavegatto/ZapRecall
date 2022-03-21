export default function Conclusoes(props){
    const {concluidos, imagens} = props;
    const divImgs = imagens.map(img => <img src={img} alt="respostas" />)
    return (
        <footer className="footer">
            <div>
                <p>{concluidos}/8 CONCLUÍDOS</p>
                <div className="checks">
                {divImgs}
                </div>
            </div>
        </footer>
    )
}