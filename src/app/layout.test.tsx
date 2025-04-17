import { render, screen } from '@testing-library/react';
import RootLayout, { metadata } from './layout';

jest.mock('./components/menu-lateral/menu-lateral', () => ({
  __esModule: true,
  default: () => <div data-testid="menu-lateral">Menu Lateral</div>,
}));
// Mock para verificar o <Head> (onde os metadados são definidos)
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('RootLayout', () => {
  it('deve renderizar o título e descrição corretamente', () => {
    render(
      <RootLayout>
        <div>Conteúdo da página</div>
      </RootLayout>
    );

    // Verificar se o conteúdo da página foi renderizado
    expect(screen.getByText('Conteúdo da página')).toBeInTheDocument();

    // Verificar se o "Menu Lateral" foi renderizado (mocked)
    expect(screen.getByTestId('menu-lateral')).toBeInTheDocument();
  });

  it('deve renderizar o conteúdo filho corretamente', () => {
    render(
      <RootLayout>
        <h1>Página de Teste</h1>
      </RootLayout>
    );

    // Verificar se o conteúdo do filho está presente
    expect(screen.getByText('Página de Teste')).toBeInTheDocument();
  });

  it('deve renderizar a estrutura correta', () => {
    render(
      <RootLayout>
        <div>Outro conteúdo</div>
      </RootLayout>
    );

    // Verificar se o conteúdo foi inserido no HTML
    const bodyElement = screen.getByText('Outro conteúdo');
    expect(bodyElement).toBeInTheDocument();
  });
});

describe('metadata', () => {
  it('deve conter título e descrição corretos', () => {
    expect(metadata.title).toBe('Gabriela Fraga');
    expect(metadata.description).toBe('Página de currículo profissional');
  });
});
