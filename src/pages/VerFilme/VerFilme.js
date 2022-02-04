import React, { useEffect, useState } from "react";
import "./VerFilme.css";
import { parseISO, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
export default function VerFilme(props) {
  const [filme, setFilme] = useState([]);
  const [certificationAPI, setCertificationAPI] = useState([]);
  const [dataFormatada, setDataFormatada] = useState();
  const { id } = props.match.params;

  useEffect(() => {
    const API_KEY = "83a924a233a6fae4e8bb3ece72e1dcd0";
    const load = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-br`
      );
      const responseCertification = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}`
      );

      const body = await response.json();
      const bodyCertification = await responseCertification.json();
      setFilme(body);
      setCertificationAPI(bodyCertification.results);
    };
    load();
  }, []);

  const formatarData = () => {
    certificationAPI.map((a, index) => {
      if (a.iso_3166_1 === "BR") {
        console.log(a.release_dates[0].release_date);
        const firstDate = parseISO(a.release_dates[0].release_date);
        const formattedDate = format(firstDate, "' 'dd'/'MM'/'yyyy' '", {
          locale: ptBR,
        });
        setDataFormatada(formattedDate);
      }
    });
  };
  if (dataFormatada === undefined) {
    formatarData();
  }
  console.log(filme);
  return (
    <div className="VerFilme-container">
      <div className="VerFilme-container__infos">
        <img
          src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
          alt={filme.title}
        />
        <div className="VerFilme-description">
          <h1>{filme.title}</h1>
          <div>
            {certificationAPI.map((filme, index) => (
              <p>
                {filme.iso_3166_1 === "BR"
                  ? filme.release_dates[0].certification + " anos"
                  : ""}
              </p>
            ))}
            <p>{dataFormatada}(BR)</p>
            {filme.genres != undefined &&
              filme.genres.map((filme, index) => <p>{filme.name}</p>)}
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
