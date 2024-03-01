import Cabecalho from "../../components/Cabecalho";
import Formulario from "../../components/Formulario/Formulario";
import Rodape from "../../components/Rodape/Rodape";
import styles from './Configuracao.module.scss'

const Configuracao = () => {
    return (
        <div className={styles.container}>
            <Cabecalho />
                <div className={styles.container__infos}>
                    <Formulario />
                    <Rodape />
                </div>
        </div>
    )
};

export default Configuracao;