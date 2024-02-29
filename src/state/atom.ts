import { atom } from "recoil";

export const listDeParticipantesState = atom<string[]>({
    key: 'listDeParticipantesState',
    default: []
})