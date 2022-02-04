import React, { useEffect, useState } from "react";
import "./VerFilme.css";

export default function VerFilme(props) {
  const [filme, setFilme] = useState([]);
  const { id } = props.match.params;
  console.log(id);
  useEffect(() => {
    const API_KEY = "83a924a233a6fae4e8bb3ece72e1dcd0";
    const load = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-br`
      );
      const body = await response.json();
      setFilme(body);
    };
    load();
  }, []);
  console.log(filme);
  return (
    <div className="verFilme-container">
      <h1>{filme.original_title}</h1>
      <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} />
    </div>
  );
}
