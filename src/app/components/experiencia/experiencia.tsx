"use client"

import React from "react";

export type ExperienciaProps = {
  titulo: string;
  empresa: string;
  cidade: string;
  inicio: string;
  fim: string;
  descricao: string[];
};

export default function Experiencia({
    titulo,
    empresa,
    cidade,
    inicio,
    fim,
    descricao
  }: ExperienciaProps) {
  return(
    <div className="flex flex-col">
        <div>{titulo}</div>
        <div className="flex flex-row">
            <div>{empresa}</div>
            <div>{cidade}</div>
            <div>{inicio}</div> - <div>{fim}</div>
        </div>
        <ul>
            {descricao.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>

  );
}
