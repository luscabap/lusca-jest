import { fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

test('quando o input esta vazio, novos participantes não podem adicionados', () => {
    render(<Formulario />)

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
    })
    fireEvent.click(botao);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
})