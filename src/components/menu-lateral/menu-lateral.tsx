import React from "react";
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
        <div id="conteudoMenu" className="collapse d-md-block">
          <span>Menu Lateral</span>
        </div>
      </div>
    );
  }
}
