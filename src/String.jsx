import { useState } from "react";

function String() {
  const [texto, setTexto] = useState("");
  return (
    <di>
      <h3>{texto}</h3>
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
    </di>
  );
}

export default String;
