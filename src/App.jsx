import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(10);

  //1 - useEffect utilização
  useEffect(() => {
    console.log("Roda a cada renderização");
  });

  //2- array de dependencias
  useEffect(() => {
    console.log("Só roda ao incrementar valor!");
  }, [count]);

  //3- array de dependencias vazio
  useEffect(() => {
    console.log("Só roda uma vez!");
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Renderizar
        </button>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={() => setCountB((prevCount) => prevCount + 1)}>
          Renderizar B
        </button>
        <p>{countB}</p>
      </div>
    </div>
  );
}

export default App;
