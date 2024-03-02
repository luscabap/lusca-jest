import {  useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listDeParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listDeParticipantesState);
    const lista = useRecoilValue(listDeParticipantesState);
    const setErro = useSetRecoilState(erroState);
    

    return (nomeDoParticipante: string) => {
        
        if (lista.includes(nomeDoParticipante)){
            setErro("Nomes duplicados não são permitidos!");
            setTimeout(() => {
                setErro("");
            }, 5000)
            
            return 
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])

    }
}