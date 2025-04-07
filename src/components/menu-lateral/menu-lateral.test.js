import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuLateral from './menu-lateral';

describe('Menu Lateral component', () => {
  it('renders without crashing and displays content', () => {
    render(<MenuLateral />);

    expect(screen.getByText(/Menu Lateral/i)).toBeInTheDocument();
  });
});
