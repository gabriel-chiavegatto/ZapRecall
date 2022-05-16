import ReactDOM from "react-dom"
import Iniciar from "./componentes/Iniciar"
import './assets/css/reset.css';
import './assets/css/style.css';
function App() {
    return (
            <Iniciar />
    )
}


ReactDOM.render(App(), document.querySelector(".root"));