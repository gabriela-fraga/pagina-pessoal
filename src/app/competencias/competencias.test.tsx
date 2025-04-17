import React from 'react';
import { render, screen } from '@testing-library/react';
import Competencias from './page';

describe('Educacao component', () => {
  it('renders without crashing and displays content', () => {
    render(<Competencias />);

    expect(screen.getByText(/Competências/i)).toBeInTheDocument();
  });
});
