import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import useMensagemDeErro from "../../state/hooks/useMenagemDeErro";
import styles from './Formulario.module.scss';
import { User } from '@phosphor-icons/react';

const Formulario = () => {
    const [nome, setNome] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionarNaLista(nome)
        setNome("");
        inputRef.current?.focus();
    };

    return (
        <form onSubmit={adicionarParticipante} className={styles.container}>
            <h2 className={styles.container__titulo}>Vamos começar!</h2>
            <div className={styles.container__containerBotoes}>
                <div className={styles.container__containerBotoes__containerInput}>
                    <User size={32} className={styles.container__containerBotoes__containerInput__icone}/>
                    <input
                        ref={inputRef}
                        value={nome}
                        onChange={evento => setNome(evento.target.value)}
                        type="text"
                        placeholder="Insira os nomes dos participantes"
                        className={styles.container__containerBotoes__containerInput__input}
                    />
                </div>
                <button disabled={!nome} className={styles.container__containerBotoes__botao}>Adicionar</button>
            </div>
            {mensagemDeErro && <p className={styles.erro} role="alert">{mensagemDeErro}</p>}
        </form>
    );
}
export default Formulario;