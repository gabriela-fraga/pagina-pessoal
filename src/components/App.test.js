import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./menu-lateral/menu-lateral', () => () => <div data-testid="menu-lateral">Menu Lateral</div>);

describe('App component', () => {
  it('renders without crashing and displays content', () => {
    render(<App />);

    const menu = screen.getByTestId('menu-lateral');
    expect(menu).toBeInTheDocument();

    expect(screen.getByText(/conteúdo/i)).toBeInTheDocument();
  });
});
