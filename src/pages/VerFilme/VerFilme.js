import React, { useContext, useEffect, useState } from "react";
import "./VerFilme.css";
import { Context } from "../../context/CtxApp";
import InfoFilme from "../../components/InfoFilme/InfoFilme";

export default function VerFilme(props) {
  const { setFilme, setCertificationAPI } = useContext(Context);
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

      const body = await response.json();
      const bodyCertification = await responseCertification.json();
      setFilme(body);
      setCertificationAPI(bodyCertification.results);
    };

    load();
  }, []);

  return (
    <>
      <InfoFilme />
    </>
  );
}
