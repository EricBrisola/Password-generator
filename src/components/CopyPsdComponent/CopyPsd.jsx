import React from "react";
import copyIcon from "../../assets/copy-icon.png";
import "./CopyPsd.css";

const CopyPsd = (props) => {
  const psdValue = props.psdValue;

  const copyToClipboard = () => {
    if (psdValue !== "") {
      const copiedPsd = psdValue;
      navigator.clipboard
        .writeText(copiedPsd)
        .then(() => {
          alert("Copiado");
        })
        .catch((err) => {
          alert("Erro ao copiar para a área de transferência:", err);
        });
    } else {
      alert("Gere uma senha para copiá-la");
    }
  };

  return (
    <img
      src={copyIcon}
      alt={"copy-icon"}
      id={"copy-icon"}
      onClick={copyToClipboard}
    />
  );
};

export default CopyPsd;
