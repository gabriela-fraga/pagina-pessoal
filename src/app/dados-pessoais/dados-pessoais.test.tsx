import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DadosPessoais from "./page";

const openMock = jest.fn();

beforeAll(() => {
  global.window.open = openMock;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Dados Pessoais component", () => {
  it("renders without crashing and displays content", () => {
    render(<DadosPessoais />);

    expect(
      screen.getByText(/Profissional com sete anos de experiência/i)
    ).toBeInTheDocument();
  });

  it("deve abrir o github ao clicar no botão", () => {
    const { container } = render(<DadosPessoais />);
    const githubBtn = container.querySelector("#githubBtn");
    fireEvent.click(githubBtn!);
    expect(openMock).toHaveBeenCalledWith(
      "http://github.com/gabriela-fraga/",
      "_blank"
    );
  });
});
