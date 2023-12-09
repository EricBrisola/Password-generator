import React from "react";

function Option() {
  return (
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
  );
}

export default Option;
