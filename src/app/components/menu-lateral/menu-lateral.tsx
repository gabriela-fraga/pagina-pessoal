"use client";

import React, { useState } from "react";
import photo from "../../../../public/photo.png";
import Link from "next/link";

export default function MenuLateral() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const goToLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/gabriela-fraga-medeiros/",
      "_blank"
    );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("gabyfragamoreiramedeiros@gmail.com");
    setShowToast(true);
    setFadeOut(false);
    setTimeout(() => setFadeOut(true), 1700);
    setTimeout(() => setShowToast(false), 2000);
  };

  const goToWhatsapp = () => {
    window.open("https://wa.me/5531998568440", "_blank");
  };

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
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:flex-col md:items-center`}
      >
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
          <h3 className="text-center text-xl mb-4 px-4">
            Gabriela Fraga Moreira Medeiros
          </h3>

          <Link
            className="my-2 text-white text-decoration-none"
            href="/dados-pessoais"
          >
            Dados Pessoais
          </Link>
          <Link
            className="my-2 text-white text-decoration-none"
            href="/experiencias"
          >
            Experiência
          </Link>
          <Link
            className="my-2 text-white text-decoration-none"
            href="/educacao"
          >
            Educação
          </Link>
          <Link
            className="my-2 text-white text-decoration-none"
            href="/competencias"
          >
            Competências
          </Link>

          <div className="mt-3 fs-4 flex flex-row">
            <i
              className="mr-3 bi bi-whatsapp text-white cursor-pointer"
              onClick={goToWhatsapp}
            ></i>
            <i
              className="mr-3 bi bi-envelope text-white cursor-pointer"
              onClick={copyEmail}
            ></i>
            <i
              className="mr-3 bi bi-linkedin text-white cursor-pointer"
              onClick={goToLinkedin}
            ></i>
          </div>

          {showToast && (
            <div
              className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-500 ${fadeOut ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`} style={{ minWidth: 250, marginBottom: 20 }}>
              Email copiado para a área de trabalho
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
