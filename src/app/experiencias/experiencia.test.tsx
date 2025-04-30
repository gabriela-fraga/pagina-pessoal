import React from "react";
import { render, screen } from "@testing-library/react";
import Experiencias from "./page";

jest.mock("../data/experiencias", () => ({
  experiencias: [
    {
      titulo: "Título 1",
      empresa: "Empresa 1",
      cidade: "Cidade 1",
      inicio: "jan 2020",
      fim: "dez 2021",
      descricao: ["desc 1", "desc 2"]
    },
    {
      titulo: "Título 2",
      empresa: "Empresa 2",
      cidade: "Cidade 2",
      inicio: "fev 2022",
      fim: "mar 2023",
      descricao: ["desc A"]
    }
  ]
}));

describe("Experiencias component", () => {
  it("renderiza todas as experiências da lista", () => {
    render(<Experiencias />);

    expect(screen.getByText("Título 1")).toBeInTheDocument();
    expect(screen.getByText("Título 2")).toBeInTheDocument();

    expect(screen.getByText("desc 1")).toBeInTheDocument();
    expect(screen.getByText("desc A")).toBeInTheDocument();
  });
});
