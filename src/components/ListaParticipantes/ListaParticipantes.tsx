import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import styles from './ListaParticipantes.module.scss'

const ListaParticipantes = () => {
    const participantes: string[] = useListaDeParticipantes();

    return (
        <ul className={styles.lista}>
            {participantes.map(participante => <li key={participante} className={styles.lista__item}>{participante}</li>)}
        </ul>
    )
};

export default ListaParticipantes;