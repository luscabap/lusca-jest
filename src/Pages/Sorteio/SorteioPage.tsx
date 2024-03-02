import { useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";
import Cabecalho from "../../components/Cabecalho";
import styles from './SorteioPage.module.scss'
import { Alien } from "@phosphor-icons/react";
import aviao from '../../components/assets/aviao.png'

const SorteioPage = () => {

    const [participanteDaVez, setParticipanteDaVez]= useState("");
    const [amigoSecreto, setAmigoSecreto] = useState("");

    const participantes = useListaDeParticipantes();

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    };


    const resultado = useResultadoDoSorteio();

    return (
        <div className={styles.background}>
            <Cabecalho />
            <section className={styles.container}>
                <h1 className={styles.container__titulo}>Quem vai tirar o papelzinho?</h1>
                <form onSubmit={sortear} className={styles.container__form}>
                    <select
                        required
                        name="participanteDaVez"
                        id="participanteDaVez"
                        placeholder="Selecione o seu nome"
                        value={participanteDaVez}
                        onChange={e => setParticipanteDaVez(e.target.value)}
                        className={styles.container__form__select}
                    >
                        <option>Selecione o seu nome</option>
                        {participantes.map(participante => {
                            return <option key={participante}>{participante}</option>
                        })}
                    </select>
                    <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                    <button className={styles.container__form__button}>Sortear!</button>
                </form>
                {amigoSecreto && <p role="alert" className={styles.container__amigoSecreto}>{amigoSecreto}</p>}
                <img src={aviao} alt="Avião de papel verde voando" />
            </section>
        </div>
    )
};

export default SorteioPage;