import React, { useContext } from "react";
import { CliqueContext } from "./App";

const ContadorCliques = () => {

  const [cliques, setCliques] = useContext(CliqueContext);
  return (
    <div>
      <button onClick={() => setCliques(cliques + 1)}>
        Clique Aqui
      </button>
      <label>
        {cliques} cliques efetuados ...
      </label>
    </div>
  )
};

export default ContadorCliques;