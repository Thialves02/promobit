import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import Categoria from "../Categoria/Categoria";
import "./Categorias.css";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const API_KEY = "83a924a233a6fae4e8bb3ece72e1dcd0";
  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
      );
      const body = await response.json();
      setCategorias(body.genres);
      console.log(body.genres);
    };
    load();
  }, []);

  return (
    <div className="categorias-container">
      <h1>
        Milhões de filmes, séries e pessoas <br></br> para descobrir. Explore
        já.
      </h1>
      <p>FILTRE POR:</p>
      <div className="categoria-container">
        {categorias.map((categoria, index) => (
          <Categoria index={index} categoria={categoria.name} />
        ))}
      </div>
    </div>
  );
}
