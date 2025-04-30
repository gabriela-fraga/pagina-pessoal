"use client";

import React, { useState } from "react";
import photo from "../../../../public/photo.png";
import Link from "next/link";

export default function MenuLateral() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-teal-950 text-white w-full flex flex-col md:h-full">
      {/* Botão para expandir/retrair */}
      <button
        className="hover:bg-gray-800 text-white font-bold py-2 px-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Retract" : "Expand"}
      </button>

      {/* Conteúdo do menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:flex md:flex-col md:items-center`}>
        {/* Foto */}
        <div className="w-full flex justify-center my-5">
          <div className="w-36 h-36 rounded-full overflow-hidden">
            <img
              src={photo.src}
              alt="Imagem Circular"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info e links */}
        <div className="flex flex-col items-center w-full">
          <h1 className="text-center text-xl mb-4 px-4">
            Gabriela Fraga Moreira Medeiros
          </h1>

          <Link className="my-2 hover:underline" href="/dados-pessoais">
            Dados Pessoais
          </Link>
          <Link className="my-2 hover:underline" href="/experiencias">
            Experiência
          </Link>
          <Link className="my-2 hover:underline" href="/educacao">
            Educação
          </Link>
          <Link className="my-2 hover:underline" href="/competencias">
            Competências
          </Link>
        </div>
      </div>
    </div>
  );
}
