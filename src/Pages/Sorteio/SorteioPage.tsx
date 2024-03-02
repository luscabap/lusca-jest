import { useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";

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
        <section>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDaVez"
                    id="participanteDaVez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={e => setParticipanteDaVez(e.target.value)}
                >
                    {participantes.map(participante => {
                        return <option key={participante}>{participante}</option>
                    })}
                </select>
                <button>Sortear</button>
            </form>

            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    )
};

export default SorteioPage;