import React, { useContext, useState } from "react";
import { Context } from "../../context/CtxApp";
import "./Categoria.css";

export default function Categoria({ categoria, index, id }) {
  const { filmes, setFilmes } = useContext(Context);
  const [filmesFiltrados, setFilmesFiltrados] = useState([]);

  let filtro = JSON.parse(localStorage.getItem("filtro")) || [];

  const filtrarGeneros = () => {
    const filtrar = () => {
      const index = filtro.indexOf(id);
      if (index != -1) {
        filtro.splice(index, 1);
      } else {
        filtro.push(id);
      }
      localStorage.setItem("filtro", JSON.stringify(filtro));

      setFilmesFiltrados(JSON.parse(localStorage.getItem("filtro")));
    };
    filtrar();
    const con = JSON.parse(localStorage.getItem("filtro"));
    const carregarFilmes = async () => {
      console.log(con);
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=83a924a233a6fae4e8bb3ece72e1dcd0&with_genres=${con}`
      );
      const body = await response.json();
      setFilmes(body.results);
      console.log(body.results);
    };
    carregarFilmes();
    //USAR LOCALSTORAGE
    //INVALID TIME
  };

  return (
    <div key={index} onClick={filtrarGeneros}>
      <button>{categoria}</button>
    </div>
  );
}
