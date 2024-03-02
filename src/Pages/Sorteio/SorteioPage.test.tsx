import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import SorteioPage from "./SorteioPage";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";
import { useNavigate } from "react-router-dom";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
});

jest.mock('../../state/hooks/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn()
    }
});

const mockNavegacao = jest.fn();
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('Na página de sorteio', () => {

    const participantes = ['Lucas', 'Bruno', 'Yasmin'];

    const resultado = new Map([
        ['Lucas', 'Bruno'],
        ['Bruno', 'Yasmin'],
        ['Yasmin', 'Lucas'],
    ])

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);

        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
    })

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <SorteioPage />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option');

        expect(opcoes).toHaveLength(participantes.length + 1) //+1 devido a option default para selecionar
    });

    test('o amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <SorteioPage />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Selecione o seu nome');

        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        });

        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        const amigoSecreto = screen.getByRole('alert');

        expect(amigoSecreto).toBeInTheDocument();
    });

    test('a página é direcionado a página principal quando clicado botão', () => {
        render(
            <RecoilRoot>
                <SorteioPage />
            </RecoilRoot>
        );

        const botaoHome = screen.getByText('Página Principal');

        fireEvent.click(botaoHome);
        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/');
    })
    
});