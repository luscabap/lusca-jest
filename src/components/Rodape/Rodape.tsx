import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import styles from './Rodape.module.scss';
import sacola from '../assets/sacolas.png';
import { useSorteador } from "../../state/hooks/useSorteados";
import { Timer } from "@phosphor-icons/react";

const Rodape = () => {
    const participantes = useListaDeParticipantes();

    const navegarPara = useNavigate();

    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (
        <footer className={styles.container}>
            <div className={styles.container__containerBotao}>
                <Timer size={32} color="#FFF" className={styles.container__containerBotao__icone}/>
                <button 
                    disabled={participantes.length < 3}
                    onClick={iniciar}
                    className={styles.container__containerBotao__botao}
                >Iniciar brincadeira!</button>
            </div>
            <img src={sacola} alt="Imagem de 2 sacolas verde e azul" />
        </footer>
    )
};

export default Rodape;