import React from 'react';
import { render, screen } from '@testing-library/react';
import DadosPessoais from './page';

describe('Dados Pessoais component', () => {
  it('renders without crashing and displays content', () => {
    render(<DadosPessoais />);

    expect(screen.getByText(/Profissional com seis anos de experiência/i)).toBeInTheDocument();
  });
});
