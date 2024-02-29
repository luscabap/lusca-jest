import styles from './Cabecalho.module.scss';
import logo from '../../../public/logo.png'

export default function Formulario(){
    return (
        <div className={styles.container__header}>
            <h1>OLÁ</h1>
            <img src={logo} alt="Logo da página" />
        </div>
    )
}