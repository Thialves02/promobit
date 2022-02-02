import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import Categoria from "../Categoria/Categoria";
import "./Categorias.css";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const load = async () => {
      let list = await Api.getCategorias();
      setCategorias(list);
      console.log(list);
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
          <Categoria index={index} categoria={categoria.title} />
        ))}
      </div>
    </div>
  );
}
