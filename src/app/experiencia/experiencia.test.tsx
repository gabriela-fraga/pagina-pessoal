import React from 'react';
import { render, screen } from '@testing-library/react';
import Experiencia from './page';

describe('Experiência component', () => {
  it('renders without crashing and displays content', () => {
    render(<Experiencia />);

    expect(screen.getByText(/Experiência/i)).toBeInTheDocument();
  });
});
