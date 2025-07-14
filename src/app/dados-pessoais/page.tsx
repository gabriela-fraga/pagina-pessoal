"use client";

import React from "react";
import frontend from "../../../public/frontend.svg";
import Image from "next/image";

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

      <div className="flex flex-row my-auto">
        <div className="col-4 flex items-center justify-center flex-col">
          <Image src={frontend}
            alt="Uma jovem mulher está programando em uma mesa com um notebook, cercada por plantas verdes. O ambiente transmite calma e foco. Na tela e ao redor dela estão as palavras CSS3, HTML5, React e Ang para Angular, destacando tecnologias de desenvolvimento web."
            className="max-w-full h-auto"
            width={300} height={300} />
          <span className="text-sm">
            <a href="https://iconscout.com/illustrations/women"
              className="text-underline font-size-sm"
              target="_blank" >
              Women Web Developer with laptop
            </a>
            {" "} por{" "}
            <a href="https://iconscout.com/contributors/woobrodesign"
              className="text-underline font-size-sm"
              target="_blank" >
              WOOBRO LTD
            </a>
          </span>
        </div>

        <span className="flex my-auto ml-auto col-8">
          Profissional com seis anos de experiência no desenvolvimento de
          aplicações web utilizando Angular e React. Possuo inglês fluente, o
          que me permite colaborar eficazmente com equipes internacionais. Meu
          objetivo é contribuir para o sucesso de projetos desafiadores e
          impactar positivamente a experiência dos usuários, com atenção para
          UX/UI e responsividade dos sistemas, buscando garantir a melhor
          experiência aos usuários em todos os cenários.
        </span>
      </div>

      <div className="flex justify-center mt-auto">
        <button
          id="githubBtn"
          className="py-2 px-4 bg-green-700 text-white rounded"
          onClick={goToGithub}
        >
          <i className="mr-4 bi bi-github"></i>Acesse meu portfólio
        </button>
      </div>
    </div>
  );
}
