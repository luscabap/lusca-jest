import { act, fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

describe('descrevendo o comportamento do Formulário.tsx', () => {
    
    test('quando o input esta vazio, novos participantes não podem adicionados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        expect(input).toBeInTheDocument();
        expect(botao).toBeDisabled();
    });
    
    test('adicionar um participante caso esteja preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
            )
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: "Lucas Baptista"
            }
        });
        fireEvent.click(botao);
    
        expect(input).toHaveFocus();
        expect(input).toHaveValue("");
    });
    
    test('nomes duplicados não podem ser adicionaados na lista', () => {
        
    
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: "Lucas Baptista"
            }
        });
        fireEvent.click(botao);
    
        fireEvent.change(input, {
            target: {
                value: "Lucas Baptista"
            }
        });
        fireEvent.click(botao);
        
        const mensagemErro = screen.getByRole('alert');
    
        expect(mensagemErro.textContent).toBe("Nomes duplicados não são permitidos!")
    
    });
    
    test ('a mensagem derro deve sumir após os timers', () => {
        jest.useFakeTimers();
    
        render (
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const botao = screen.getByRole('button');
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        fireEvent.change(input, {
            target: {
                value: "Lucas Baptista"
            }
        });
        fireEvent.click(botao);
    
        fireEvent.change(input, {
            target: {
                value: "Lucas Baptista"
            }
        });
        fireEvent.click(botao);
    
        let mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeInTheDocument();
    
        act(() => {
            jest.runAllTimers();
        });
    
        mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeNull();
    });
})

