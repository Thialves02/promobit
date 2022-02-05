import React, { useContext, useEffect, useState } from "react";
import "./VerFilme.css";
import { Context } from "../../context/CtxApp";
import InfoFilme from "../../components/InfoFilme/InfoFilme";
import Elenco from "../../components/Elenco/Elenco";
import Trailer from "../../components/Trailer/Trailer";

export default function VerFilme(props) {
  const { setFilme, setCertificationAPI, setCredits, setTrailer } =
    useContext(Context);
  const { id } = props.match.params;

  useEffect(() => {
    const API_KEY = "83a924a233a6fae4e8bb3ece72e1dcd0";
    const load = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-br`
      );
      const responseCertification = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}&language=pt-br`
      );
      const reponseCredits = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pt-br`
      );
      const reponseTrailer = await fetch(
        `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`
      );

      const body = await response.json();
      const bodyCertification = await responseCertification.json();
      const bodyCredits = await reponseCredits.json();
      const bodyTrailer = await reponseTrailer.json();

      setFilme(body);
      setCertificationAPI(bodyCertification.results);
      setCredits(bodyCredits);
      setTrailer(bodyTrailer.results);
      console.log(bodyTrailer.results);
    };

    load();
  }, []);

  return (
    <>
      <InfoFilme />
      <Elenco />
      <Trailer />
    </>
  );
}
