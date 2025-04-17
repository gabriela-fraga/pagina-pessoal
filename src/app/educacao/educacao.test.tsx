import React from 'react';
import { render, screen } from '@testing-library/react';
import Educacao from './page';

describe('Educacao component', () => {
  it('renders without crashing and displays content', () => {
    render(<Educacao />);

    expect(screen.getByText(/Educação/i)).toBeInTheDocument();
  });
});
