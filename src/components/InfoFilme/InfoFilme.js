import React, { useContext, useEffect, useState } from "react";
import "./InfoFilme.css";
import { parseISO, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Context } from "../../context/CtxApp";

export default function InfoFilme() {
  const { filme, certificationAPI, credits } = useContext(Context);
  const [dataFormatada, setDataFormatada] = useState();
  const [etaria, setEtaria] = useState();
  const [nota, setNota] = useState();
  const [crew, setCrew] = useState(undefined);

  useEffect(() => {
    (async () => {
      const getVote = String(filme.vote_average);
      const formatVote = getVote.replace(/[.]/g, "");
      setNota(formatVote);

      const creditsArray = credits.crew;
      const newCredits = creditsArray.slice(0, 6);
      setCrew(newCredits);

      certificationAPI.map((movie, index) => {
        if (movie.iso_3166_1 == "BR") {
          const firstDate = parseISO(movie.release_dates[0].release_date);
          const firstEtaria = movie.release_dates[0].certification;
          const formattedDate = format(firstDate, "' 'dd'/'MM'/'yyyy' '", {
            locale: ptBR,
          });
          setDataFormatada(formattedDate);
          setEtaria(firstEtaria);
        }
      });
    })();
  }, [filme.vote_average, credits, certificationAPI]);

  const calcNota = 157 - (157 * nota) / 100;

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
    <div>
      <div className="VerFilme-container">
        <div className="VerFilme-container__infos">
          <img
            src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
            alt={filme.title}
          />
          <div className="VerFilme-description">
            <h1>{filme.title}</h1>
            <div className="description__infos">
              {etaria ? (
                etaria === "L" ? (
                  <p>Livre</p>
                ) : (
                  <p>{etaria} anos </p>
                )
              ) : (
                <p>Faixa etária não informada </p>
              )}
              <p>{dataFormatada}(BR)</p>
              <span></span>
              <div className="description__types">
                {filme.genres != undefined &&
                  filme.genres.map((filme, index) => (
                    <p key={index}>{filme.name}</p>
                  ))}
              </div>
              <p>{finalTime}</p>
            </div>
            <div className="box-container">
              <div className="box">
                <div className="box-circle">
                  <svg>
                    <circle cx="25" cy="25" r="25"></circle>
                    {calcNota && (
                      <circle
                        cx="25"
                        cy="25"
                        r="25"
                        style={{
                          strokeDashoffset: calcNota,
                          stroke: "#14ff00",
                        }}
                      ></circle>
                    )}
                  </svg>
                </div>
                <div className="number">
                  <h2>{nota}%</h2>
                </div>
              </div>
              <div className="box-info">Avaliação dos usuários</div>
            </div>
            <div className="description__sinopse">
              <h2>Sinopse</h2>
              <p>{filme.overview}</p>
            </div>
            <div className="description__crew">
              {crew &&
                crew.map((person, index) => (
                  <div className="description__crew-person" key={index}>
                    <h2>{person.name}</h2>
                    <p>{person.job}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
