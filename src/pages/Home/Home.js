import React from "react";
import Categorias from "../../components/Categorias/Categorias";
import Filmes from "../../components/Filmes/Filmes";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Categorias />
      <Filmes />
    </div>
  );
}
