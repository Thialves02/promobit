import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import Filme from "../Filme/Filme";
import "./Recomendacoes.css";

export default function Recomendacoes() {
  const [recomendacao, setRecomendacao] = useState([]);
  const { recomedation } = useContext(Context);

  useEffect(() => {
    (async () => {
      const newRecomendation = recomedation.slice(0, 6);
      setRecomendacao(newRecomendation);
    })();
  }, [recomedation]);

  return (
    <div className="recomendacoes-container">
      <h1>Recomendações</h1>
      <div className="recomendacoes">
        {recomendacao.length >= 1
          ? recomendacao.map((recomendation, index) => (
              <Filme
                key={index}
                imagem={recomendation.poster_path}
                titulo={recomendation.title}
                data={recomendation.release_date}
                id={recomendation.id}
              />
            ))
          : "Recomendações não disponíveis"}
      </div>
    </div>
  );
}
