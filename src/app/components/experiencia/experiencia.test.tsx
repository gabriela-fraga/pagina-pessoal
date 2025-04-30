import React from "react";
import { render, screen } from "@testing-library/react";
import Experiencia, { ExperienciaProps } from "./experiencia";

describe("Experiencia component", () => {
  const mockProps: ExperienciaProps = {
    titulo: "Título Teste",
    empresa: "Empresa Teste",
    cidade: "Cidade Teste",
    inicio: "jan 2020",
    fim: "dez 2021",
    descricao: ["item 1", "item 2", "item 3"]
  };

  it("renderiza todos os dados corretamente", () => {
    render(<Experiencia {...mockProps} />);

    expect(screen.getByText("Título Teste")).toBeInTheDocument();
    expect(screen.getByText("Empresa Teste")).toBeInTheDocument();
    expect(screen.getByText("Cidade Teste")).toBeInTheDocument();
    expect(screen.getByText("jan 2020")).toBeInTheDocument();
    expect(screen.getByText("dez 2021")).toBeInTheDocument();

    mockProps.descricao.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
