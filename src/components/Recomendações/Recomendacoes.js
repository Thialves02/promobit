import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import Filme from "../Filme/Filme";
import "./Recomendacoes.css";

export default function Recomendacoes() {
  const [recomendacao, setRecomendacao] = useState([]);
  const { recomedation } = useContext(Context);

  //useEffect para exibir apenas os 6 primeiros filmes recomendados para determinado filme
  useEffect(
    () => {
      (async () => {
        const newRecomendation = recomedation.slice(0, 6);
        setRecomendacao(newRecomendation);
      })();
    },
    //useEffect irá executar novamente se a variavel for alterada
    [recomedation]
  );

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
