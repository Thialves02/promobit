import React, { useContext, useState } from "react";
import "./Paginacao.css";
import { Context } from "../../context/CtxApp";

export default function Paginacao() {
  const { pagina, setPagina, filmesFiltrados, filmes } = useContext(Context);
  const [margin, setMargin] = useState(0);
  const [paginas, setPaginas] = useState(1);

  const pages = [
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
    { page: 5 },
    { page: 6 },
    { page: 7 },
    { page: 8 },
    { page: 9 },
    { page: 10 },
  ];

  //Pega o valor da pagina clicada
  const newPage = (index) => {
    setPagina(index);
  };

  //Pega o valor da ultima pagina
  const lastPage = () => {
    setPagina(pages.length);
  };

  //Altera o container de paginas para o proximo e o seu valor
  const nextPage = () => {
    setMargin(margin - 150);
    setPaginas(paginas + 1);
  };

  //Altera o container de paginas para o anterior e o seu valor
  const previusPage = () => {
    setMargin(margin + 150);
    setPaginas(paginas - 1);
  };

  //Seleciona o total de paginas que irá aparecer no container
  const total = Math.ceil(pages.length / 5);

  return (
    <div
      className={
        filmesFiltrados.length == 0
          ? "paginacao-container"
          : "paginacao-container__hidden"
      }
    >
      <p
        className={margin === 0 ? "previus-page__none" : "previus-page"}
        onClick={previusPage}
      >
        {"<"}
      </p>
      <div className="paginacao-container__paginas">
        <div className="paginas-container" style={{ marginLeft: margin }}>
          {pages.map((page, index) => (
            <p onClick={() => newPage(index + 1)}>{page.page}</p>
          ))}
        </div>
      </div>
      <p
        className={paginas >= total ? "next-page__none" : "next-page"}
        onClick={nextPage}
      >
        {">"}
      </p>
      <p onClick={() => lastPage()}> Última </p>
    </div>
  );
}
