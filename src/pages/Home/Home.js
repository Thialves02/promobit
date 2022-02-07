import React from "react";
import Categorias from "../../components/Categorias/Categorias";
import Filmes from "../../components/Filmes/Filmes";
import Paginacao from "../../components/Paginação/Paginacao";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Categorias />
      <Filmes />
      <Paginacao />
    </>
  );
}
