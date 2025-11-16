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
    <div className="flex flex-col mb-6">
        <h5 className="font-['Courier_New',monospace] text-teal-950 font-bold ">{titulo}</h5>
        <div className="flex flex-row font-['Courier_New',monospace] text-green-700 font-bold mb-1">
            <div>{empresa}</div>
            &nbsp; | &nbsp;
            <div>{cidade}</div>
            &nbsp; | &nbsp;
            <div>{inicio}</div>
            &nbsp; - &nbsp;
            <div>{fim}</div>
        </div>
        <div className="flex flex-row">
          <div className="flex pt-2 pb-3">
            <div className="flex heigth-100 mx-4 border-1 border-dashed border-r-green-850"></div>
          </div>
          <ul className="pl-0 font-['Argesta', monospace]">
            {descricao.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    </div>

  );
}
