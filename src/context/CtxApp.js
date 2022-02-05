import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export default function CtxApp({ children }) {
  const [pagina, setPagina] = useState(1);
  const [filmes, setFilmes] = useState([]);
  const [filmesFiltrados, setFilmesFiltrados] = useState([]);
  const [filme, setFilme] = useState([]);
  const [certificationAPI, setCertificationAPI] = useState([]);
  const [credits, setCredits] = useState([]);

  const [a, aA] = useState([]);
  return (
    <Context.Provider
      value={{
        pagina,
        setPagina,
        filmes,
        setFilmes,
        filmesFiltrados,
        setFilmesFiltrados,
        a,
        aA,
        filme,
        setFilme,
        certificationAPI,
        setCertificationAPI,
        credits,
        setCredits,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, CtxApp };
