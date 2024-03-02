import Cabecalho from "../../components/Cabecalho";
import Formulario from "../../components/Formulario/Formulario";
import ListaParticipantes from "../../components/ListaParticipantes/ListaParticipantes";
import Rodape from "../../components/Rodape/Rodape";
import styles from './ConfiguracaoPage.module.scss'

const ConfiguracaoPage = () => {
    return (
        <div className={styles.container}>
            <Cabecalho />
                <div className={styles.container__infos}>
                    <Formulario />
                    <ListaParticipantes />
                    <Rodape />
                </div>
        </div>
    )
};

export default ConfiguracaoPage;