import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import SorteioPage from "./SorteioPage";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('Na página de sorteio', () => {

    const participantes = ['Lucas', 'Bruno', 'Teste'];

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <SorteioPage />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option');

        expect(opcoes).toHaveLength(participantes.length)
    })
});