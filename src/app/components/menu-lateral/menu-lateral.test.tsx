import React from "react";
import {
  findByText,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import MenuLateral from "./menu-lateral";

const openMock = jest.fn();
const writeTextMock = jest.fn();

beforeAll(() => {
  global.window.open = openMock;
  Object.assign(navigator, {
    clipboard: {
      writeText: writeTextMock,
    },
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Menu Lateral component", () => {
  it("renders without crashing and displays content", () => {
    render(<MenuLateral />);

    expect(
      screen.getByText(/Gabriela Fraga Moreira Medeiros/i)
    ).toBeInTheDocument();
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
  it("deve abrir o LinkedIn ao clicar no ícone", () => {
    const { container } = render(<MenuLateral />);
    const linkedinIcon = container.querySelector(".bi-linkedin");
    fireEvent.click(linkedinIcon!);
    expect(openMock).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/gabriela-fraga-medeiros/",
      "_blank"
    );
  });

  it("deve abrir o WhatsApp ao clicar no ícone", () => {
    const { container } = render(<MenuLateral />);
    const whatsappIcon = container.querySelector(".bi-whatsapp");
    fireEvent.click(whatsappIcon!);
    expect(openMock).toHaveBeenCalledWith(
      "https://wa.me/5531998568440",
      "_blank"
    );
  });

  it("deve copiar o email ao clicar no envelope e mostrar o toast", async () => {
    const { container, getByText } = render(<MenuLateral />);
    const envelopeIcon = container.querySelector(".bi-envelope");
    fireEvent.click(envelopeIcon!);
    expect(writeTextMock).toHaveBeenCalledWith(
      "gabyfragamoreiramedeiros@gmail.com"
    );
    const toast = await screen.findByText(/Email copiado para a área de trabalho/i);
    expect(toast).toBeInTheDocument();

    // Aguarda o fadeOut e sumiço do toast
    await waitFor(
      () => {
        expect(toast).not.toBeVisible();
      },
      { timeout: 2500 }
    );
  });
});
