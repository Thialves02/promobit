import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import Filme from "../Filme/Filme";
import "./Recomendacoes.css";

export default function Recomendacoes() {
  const [recomendacao, setRecomendacao] = useState([]);
  const { recomedation } = useContext(Context);

  useEffect(() => {
    if (recomedation != undefined) {
      const newRecomendation = recomedation.slice(0, 6);
      setRecomendacao(newRecomendation);
    }
  }, [recomedation]);

  console.log(recomendacao);
  return (
    <div className="recomendacoes-container">
      <h1>Recomendações</h1>
      <div className="recomendacoes">
        {recomendacao &&
          recomendacao.map((recomendation, index) => (
            <Filme
              imagem={recomendation.poster_path}
              titulo={recomendation.title}
              data={recomendation.release_date}
              id={recomendation.id}
            />
          ))}
      </div>
    </div>
  );
}
