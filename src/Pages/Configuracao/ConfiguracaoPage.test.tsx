import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ConfiguracaoPage from "./ConfiguracaoPage";

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('a página de configuração', () => {

    test('deve ser renderizada corretamente', () => {
        const { container } = render (
            <RecoilRoot>
                <ConfiguracaoPage />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot();

    })
})