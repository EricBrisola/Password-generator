import React from "react";
import { useState } from "react";
import "./psdGenerator.css";
import CopyPsd from "../CopyPsdComponent/CopyPsd";
import Option from "../OptionComponent/Option";

function PsdGenerator() {
  const [currentPsd, setCurrentPsd] = useState("");
  const [upperCaseCb, setUpperCaseCb] = useState(false);
  const [lowerCaseCb, setLowerCasecb] = useState(false);
  const [numbersCb, setNumbersCb] = useState(false);
  const [specialsCb, setSpecialsCb] = useState(false);

  const changeCbValueUpper = () =>
    setUpperCaseCb((upperCaseCb) => !upperCaseCb);
  const changeCbValueLower = () =>
    setLowerCasecb((lowerCaseCb) => !lowerCaseCb);
  const changeCbValueNums = () => setNumbersCb((numbersCb) => !numbersCb);
  const changeCbValueSpec = () => setSpecialsCb((specialsCb) => !specialsCb);

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
      ? alert("Escolha ao menos um dos grupos de caracteres")
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
        <Option
          htmlFor={"upper-checkbox"}
          text={"Maiúsculas (A-Z)"}
          checked={upperCaseCb}
          onChange={changeCbValueUpper}
          id={"upper-checkbox"}
        />
        <Option
          htmlFor={"lower-checkbox"}
          text={"Minúsculas (a-z)"}
          checked={lowerCaseCb}
          onChange={changeCbValueLower}
          id={"lower-checkbox"}
        />
        <Option
          htmlFor={"numbers-checkbox"}
          text={"Números (0-9)"}
          checked={numbersCb}
          onChange={changeCbValueNums}
          id={"numbers-checkbox"}
        />
        <Option
          htmlFor={"specials-checkbox"}
          text={"Especiais (!-*)"}
          checked={specialsCb}
          onChange={changeCbValueSpec}
          id={"specials-checkbox"}
        />
      </main>
      <section className="buttons">
        <button
          onClick={() =>
            generatePsd(upperCaseCb, lowerCaseCb, numbersCb, specialsCb)
          }
          className="generate-psd-btn"
        >
          Gerar
        </button>
        <CopyPsd psdValue={currentPsd} />
      </section>
      <p className="password-field">{currentPsd}</p>
    </div>
  );
}

export default PsdGenerator;
