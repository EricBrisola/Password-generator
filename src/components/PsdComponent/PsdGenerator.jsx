import React from "react";
import { useState } from "react";
import "./psdGenerator.css";

function PsdGenerator() {
  const [currentPsd, setCurrentPsd] = useState("");
  const [upperCaseCb, setUpperCaseCb] = useState(false);
  const [lowerCaseCb, setLowerCasecb] = useState(false);
  const [numbersCb, setNumbersCb] = useState(false);
  const [specialsCb, setSpecialsCb] = useState(false);

  const changeCbValueUpper = () => setUpperCaseCb(!upperCaseCb);
  const changeCbValueLower = () => setLowerCasecb(!lowerCaseCb);
  const changeCbValueNums = () => setNumbersCb(!numbersCb);
  const changeCbValueSpec = () => setSpecialsCb(!specialsCb);

  const generatePsd = (upperCaseCb, lowerCaseCb, numbersCb, specialsCb) => {
    const allOptions = [
      { chosen: upperCaseCb, value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
      { chosen: lowerCaseCb, value: "abcdefghijklmnopqrstuvwxyz" },
      { chosen: numbersCb, value: "0123456789" },
      { chosen: specialsCb, value: "!@#$%&*()_+-=[]{}|:'<>,./?" },
    ];

    const chosenOptions = allOptions.filter((option) => option.chosen === true);
    const valuesForPsd = chosenOptions.map((e) => e.value).join("");
    //console.log(valuesForPsd);

    const generatedPsd = [];
    for (let i = 0; i < 8; i++) {
      generatedPsd.push(
        valuesForPsd[Math.floor(Math.random() * (valuesForPsd.length - 1))]
      );
    }
    // console.log(generatedPsd.join(""));
    const test = generatedPsd.join("");
    test === ""
      ? alert("Escolha ao menos um ddos grupos de caracteres")
      : setCurrentPsd(test);

    setUpperCaseCb(false);
    setLowerCasecb(false);
    setNumbersCb(false);
    setSpecialsCb(false);
  };

  return (
    <div className="psd-generator">
      <section className="header">
        <p className="title">Gerador de senhas</p>
        <p className="sub-title">Escolha os tipos de caracteres</p>
      </section>
      <main className="options">
        <section className="options-section">
          <label htmlFor="upper-checkbox">Maiúsculas {"(A-Z)"}</label>
          <input
            type="checkbox"
            checked={upperCaseCb}
            onChange={changeCbValueUpper}
            className="checkbox-inputs"
            id="upper-checkbox"
          />
        </section>
        <section className="options-section">
          <label htmlFor="lower-checkbox">Minúsculas {"(a-z)"}</label>
          <input
            type="checkbox"
            checked={lowerCaseCb}
            onChange={changeCbValueLower}
            className="checkbox-inputs"
            id="lower-checkbox"
          />
        </section>
        <section className="options-section">
          <label htmlFor="numbers-checkbox">Números {"(0-9)"}</label>
          <input
            type="checkbox"
            checked={numbersCb}
            onChange={changeCbValueNums}
            className="checkbox-inputs"
            id="numbers-checkbox"
          />
        </section>
        <section className="options-section">
          <label htmlFor="specials-checkbox">Especiais {"(!-*)"}</label>
          <input
            type="checkbox"
            checked={specialsCb}
            onChange={changeCbValueSpec}
            className="checkbox-inputs"
            id="specials-checkbox"
          />
        </section>
      </main>
      <p>
        <button
          onClick={() =>
            generatePsd(upperCaseCb, lowerCaseCb, numbersCb, specialsCb)
          }
          className="generate-psd-btn"
        >
          Gerar
        </button>
      </p>
      <p className="password-field">{currentPsd}</p>
    </div>
  );
}

export default PsdGenerator;
