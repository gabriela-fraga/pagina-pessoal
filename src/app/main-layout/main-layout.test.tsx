import { render, screen } from '@testing-library/react';
import MainLayout from './main-layout';

jest.mock('../components/menu-lateral/menu-lateral', () => ({
  __esModule: true,
  default: () => <div data-testid="menu-lateral">Menu Lateral</div>,
}));

describe('MainLayout', () => {
  it('renderiza menu e conteúdo', () => {
    render(
      <MainLayout>
        <h1>Conteúdo</h1>
      </MainLayout>
    );

    expect(screen.getByTestId('menu-lateral')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo')).toBeInTheDocument();
  });
});
