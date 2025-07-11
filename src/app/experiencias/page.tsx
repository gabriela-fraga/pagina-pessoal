import React from "react";
import Experiencia, { ExperienciaProps } from "../components/experiencia/experiencia";
import { experiencias } from "../data/experiencias";

export default function Experiencias() {
  return (
    <div className="col-12 p-15">
      {experiencias.map((experiencia:ExperienciaProps, index: number) => (
        <Experiencia key={index} titulo={experiencia.titulo} empresa={experiencia.empresa} cidade={experiencia.cidade} inicio={experiencia.inicio} fim={experiencia.fim} descricao={experiencia.descricao}></Experiencia>
      ))}
    </div>
  );
}
