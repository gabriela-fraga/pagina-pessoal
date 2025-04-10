import React from "react";
import photo from "../../../public/photo.png";
import "./menu-lateral.scss";

export default class MenuLateral extends React.Component {
  render() {
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
            <button className="btn-link my-2">Dados Pessoais</button>
            <button className="btn-link my-2">Experiência</button>
            <button className="btn-link my-2">Educação</button>
            <button className="btn-link my-2">Competências</button>
          </div>
        </div>
      </div>
    );
  }
}
