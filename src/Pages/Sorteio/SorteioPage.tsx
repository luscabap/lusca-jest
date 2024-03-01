import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

const SorteioPage = () => {

    const participantes = useListaDeParticipantes();

    return (
        <section>
            <form>
                <select name="participanteDaVez" id="participanteDaVez">
                    {participantes.map(participante => {
                        return <option key={participante}>{participante}</option>
                    })}
                </select>
            </form>
        </section>
    )
};

export default SorteioPage;