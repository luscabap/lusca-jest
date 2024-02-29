import styles from './Cabecalho.module.scss';
import logo from '../assets/logo.png';
import participante from '../assets/participante.png'

export default function Cabecalho(){
    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo da página" />
            <img src={participante} alt="Foto da participante" className={styles.container__participante}/>
        </div>
    )
}