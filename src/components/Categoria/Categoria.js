import React from "react";
import "./Categoria.css";

export default function Categoria({ categoria, index }) {
  return (
    <div>
      <button>{categoria}</button>
    </div>
  );
}
