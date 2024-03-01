import { useRecoilValue } from "recoil"
import { listDeParticipantesState } from "../atom"

export const useListaDeParticipantes = () => {
    return useRecoilValue(listDeParticipantesState)
}