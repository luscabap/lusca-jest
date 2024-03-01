import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import styles from './Rodape.module.scss';
import sacola from '../assets/sacolas.png';

const Rodape = () => {
    const participantes = useListaDeParticipantes();

    const navegarPara = useNavigate();

    const iniciar = () => {
        navegarPara('/sorteio')
    }

    return (
        <footer className={styles.container}>
            <button 
                disabled={participantes.length < 3}
                onClick={iniciar}
                className={styles.container__botao}
            >Iniciar brincadeira!</button>
            <img src={sacola} alt="Imagem de 2 sacolas verde e azul" />
        </footer>
    )
};

export default Rodape;