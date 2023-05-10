import logo from "./logo.svg";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [concrete, setConcrete] = useState();
  const concreteChange = (event) => {
    setConcrete(event.target.value);
  };
  const [concretes, setConcretes] = useState([]);
  const concreteSubmit = (event) => {
    event.preventDefault();
    setConcretes((currentArray) => [concrete, ...currentArray]);
    setConcrete("");
  };
  const concretesParsed = concretes.map((item) => parseInt(item));
  const concreteSum = concretesParsed.reduce((a, b) => a + b, 0);

  const [asphalt, setAsphalt] = useState();
  const asphaltChange = (event) => {
    setAsphalt(event.target.value);
  };
  const [asphalts, setAsphalts] = useState([]);
  const asphaltSubmit = (event) => {
    event.preventDefault();
    setAsphalts((currentArray) => [asphalt, ...currentArray]);
    setAsphalt("");
  };
  const asphaltsParsed = asphalts.map((item) => parseInt(item));
  const asphaltSum = asphaltsParsed.reduce((a, b) => a + b, 0);

  return (
    <div>
      <h1>건설폐기물 계산기</h1>
      <hr />
      <div id="container">
        <h2>폐콘크리트 : ({concreteSum})</h2>
        <h2>폐아스콘 : ({asphaltSum})</h2>
        <form onSubmit={concreteSubmit}>
          <input
            onChange={concreteChange}
            value={concrete}
            type="number"
            placeholder="폐콘크리트"
          />
        </form>
        <form onSubmit={asphaltSubmit}>
          <input
            onChange={asphaltChange}
            value={asphalt}
            type="number"
            placeholder="폐아스콘"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
