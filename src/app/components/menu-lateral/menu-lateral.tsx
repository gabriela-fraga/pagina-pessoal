import React from "react";
import photo from "../../../../public/photo.png";
import "./menu-lateral.scss";
import Link from "next/link";

export default function MenuLateral() {
  return (
    <div className="menu col-12 d-md-flex flex-column">
      <button
        className="btn btn-primary d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#conteudoMenu"
        aria-expanded="false"
        aria-controls="conteudoMenu"
      >
        Expand / Retract
      </button>
      <div
        id="conteudoMenu"
        className="collapse d-md-flex flex-column align-items-center"
      >
        <div className="img-container my-5 mx-auto">
          <img
            src={photo.src}
            alt="Imagem Circular"
            className="imagem-circular"
          />
        </div>
        <div className="d-flex flex-column align-items-center w-100">
          <h4 className="text-center mb-4">Gabriela Fraga Moreira Medeiros</h4>
          <Link className="link my-2" href="/dados-pessoais">Dados Pessoais</Link>
          <Link className="link my-2" href="/experiencia">Experiência</Link>
          <Link className="link my-2" href="/educacao">Educação</Link>
          <Link className="link my-2" href="/competencias">Competências</Link>
        </div>
      </div>
    </div>
  );
}
