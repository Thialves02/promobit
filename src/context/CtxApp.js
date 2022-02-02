import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export default function CtxApp({ children }) {
  const [pagina, setPagina] = useState(1);

  return (
    <Context.Provider value={{ pagina, setPagina }}>
      {children}
    </Context.Provider>
  );
}

export { Context, CtxApp };
