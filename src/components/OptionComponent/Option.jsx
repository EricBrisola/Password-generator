import React from "react";
import "./Option.css";

function Option(props) {
  return (
    <section className="options-section">
      <label htmlFor={props.htmlFor}>{props.text}</label>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        className="checkbox-inputs"
        id={props.id}
      />
    </section>
  );
}

export default Option;
