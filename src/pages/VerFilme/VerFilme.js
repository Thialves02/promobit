import React, { useContext, useEffect } from "react";
import "./VerFilme.css";
import { Context } from "../../context/CtxApp";
import InfoFilme from "../../components/InfoFilme/InfoFilme";
import Elenco from "../../components/Elenco/Elenco";
import Trailer from "../../components/Trailer/Trailer";
import Recomendacoes from "../../components/Recomendações/Recomendacoes";

export default function VerFilme(props) {
  const {
    setFilme,
    setCertificationAPI,
    setCredits,
    setTrailer,
    setRecomendation,
    refresh,
    API_KEY,
  } = useContext(Context);
  const { id } = props.match.params;

  useEffect(() => {
    const load = async () => {
      //Recebe informações gerais do filme escolhido
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-br`
      );

      //Recebe a data e a faixa etária de diversos paises do filme escolhido
      const responseCertification = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}&language=pt-br`
      );

      //Recebe informações da equipe técnica e do elenco do filme escolhido
      const reponseCredits = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pt-br`
      );

      //Recebe o trailer de diversos paises do filme escolhido
      const reponseTrailer = await fetch(
        `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`
      );

      //Recebe recomendações do filme escolhido
      const reponseRecomendations = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=pt-BR&page=1`
      );

      const body = await response.json();
      const bodyCertification = await responseCertification.json();
      const bodyCredits = await reponseCredits.json();
      const bodyTrailer = await reponseTrailer.json();
      const bodyRecomendations = await reponseRecomendations.json();

      setFilme(body);
      setCertificationAPI(bodyCertification.results);
      setCredits(bodyCredits);
      setTrailer(bodyTrailer.results);
      setRecomendation(bodyRecomendations.results);
    };

    load();
  }, [refresh]);

  return (
    <>
      <InfoFilme />
      <Elenco />
      <Trailer />
      <Recomendacoes />
    </>
  );
}
