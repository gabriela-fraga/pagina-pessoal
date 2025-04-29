import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MenuLateral from './menu-lateral';

describe('Menu Lateral component', () => {
  it('renders without crashing and displays content', () => {
    render(<MenuLateral />);

    expect(screen.getByText(/Gabriela Fraga Moreira Medeiros/i)).toBeInTheDocument();
  });
  it("muda o texto do botão entre 'Expand' e 'Retract'", () => {
    render(<MenuLateral />);

    const toggleButton = screen.getByRole("button");

    // Verifica o estado inicial (isOpen = false)
    expect(toggleButton).toHaveTextContent("Expand");

    // Clica para abrir o menu (isOpen = true)
    fireEvent.click(toggleButton);

    // Agora o texto deve mudar
    expect(toggleButton).toHaveTextContent("Retract");
  });
});
