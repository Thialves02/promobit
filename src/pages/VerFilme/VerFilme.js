import React, { useContext, useEffect, useState } from "react";
import "./VerFilme.css";
import { parseISO, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Context } from "../../context/CtxApp";
export default function VerFilme(props) {
  const [filme, setFilme] = useState([]);
  const [certificationAPI, setCertificationAPI] = useState([]);
  const [dataFormatada, setDataFormatada] = useState();
  const [etaria, setEtaria] = useState();
  const [nota, setNota] = useState();
  const { id, setId } = useContext(Context);
  setId(props.match.params);

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
    const a = () => {
      const getVote = String(filme.vote_average);
      const formatVote = getVote.replace(/[.]/g, "");
      if (filme.vote_average != undefined) {
        setNota(formatVote);
      }
    };
    a();
    load();
  }, [filme.vote_average === undefined]);
  const calcNota = 157 - (157 * nota) / 100;
  const formatarData = () => {
    certificationAPI.map((a, index) => {
      if (a.iso_3166_1 === "BR") {
        console.log(a.release_dates[0].release_date);
        const firstDate = parseISO(a.release_dates[0].release_date);
        const firstEtaria = a.release_dates[0].certification;
        const formattedDate = format(firstDate, "' 'dd'/'MM'/'yyyy' '", {
          locale: ptBR,
        });
        setDataFormatada(formattedDate);
        setEtaria(firstEtaria);
      }
    });
  };
  if (dataFormatada === undefined) {
    formatarData();
  }

  var time = filme.runtime;
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;
  var hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  const finalTime =
    str_pad_left(minutes, "0", 2) + "h " + str_pad_left(seconds, "0", 2) + "m";

  return (
    <div className="VerFilme-container">
      <div className="VerFilme-container__infos">
        <img
          src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
          alt={filme.title}
        />
        <div className="VerFilme-description">
          <h1>{filme.title}</h1>
          <div className="description__infos">
            <p>{etaria} anos </p>
            <span>•</span>
            <p>{dataFormatada}(BR)</p>
            <span>•</span>
            <div className="description__types">
              {filme.genres != undefined &&
                filme.genres.map((filme, index) => <p>{filme.name}</p>)}
            </div>
            <span>•</span>
            <p>{finalTime}</p>
          </div>
          <div className="box">
            <div className="box-circle">
              <svg>
                <circle cx="25" cy="25" r="25"></circle>
                <circle
                  cx="25"
                  cy="25"
                  r="25"
                  style={{
                    strokeDashoffset: calcNota,
                    stroke: "#14ff00",
                  }}
                ></circle>
              </svg>
            </div>
            <div className="number">
              <h2>{nota}%</h2>
            </div>
          </div>
          <div className="description__sinopse">
            <h2>Sinopse</h2>
            <p>{filme.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
