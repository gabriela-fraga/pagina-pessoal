"use client";

import React from "react";

export default function DadosPessoais() {

  const goToGithub = () => {
    window.open("http://github.com/gabriela-fraga/", "_blank");
  };

  return (
    <div className="p-15 h-100 flex flex-column">
      <h1>
        Olá, eu sou a <span className="text-green-700">Gaby</span>, e desenvolvo
        frontend para sistemas web!
      </h1>

      <span className="flex my-auto ml-auto col-8">
        Profissional com seis anos de experiência no desenvolvimento de
        aplicações web utilizando Angular e React. Possuo inglês fluente, o que
        me permite colaborar eficazmente com equipes internacionais. Meu
        objetivo é contribuir para o sucesso de projetos desafiadores e impactar
        positivamente a experiência dos usuários, com atenção para UX/UI e
        responsividade dos sistemas, buscando garantir a melhor experiência aos
        usuários em todos os cenários.
      </span>

      <div className="flex justify-center">
        <button id="githubBtn" className="py-2 px-4 bg-green-700 text-white rounded" onClick={goToGithub}><i className="mr-4 bi bi-github"></i>Acesse meu portfólio</button>
      </div>
    </div>
  );
}
