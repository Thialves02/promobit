import React, { useContext } from "react";
import "./Paginacao.css";
import { Context } from "../../context/CtxApp";

export default function Paginacao() {
  const { pagina, setPagina } = useContext(Context);
  const pages = [
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
    { page: 5 },
  ];
  const newPage = (index) => {
    setPagina(index);
  };

  return (
    <div className="paginacao-container">
      {pages.map((page, index) => (
        <p onClick={() => newPage(index + 1)}>{page.page}</p>
      ))}
      <p> > </p>
      <p> Última </p>
    </div>
  );
}
