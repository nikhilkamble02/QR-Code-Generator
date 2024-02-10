import "./styles.css";
import QRCode from "react-qr-code";
import { useState } from "react";

export default function App() {
  const [link, setLink] = useState("");
  const GenerateQRCode = (e) => {
    e.preventDefault();
    setLink(e.target.value);
  };
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      {link.length > 0 ? <QRCode className="QRcode" value={link} /> : ""}

      <p>
        {link.length > 0 ? <p>Don't type just scan me :)</p> : ""}

        <input
          type="text"
          value={link}
          placeholder="Enter your source link"
          onChange={(e) => {
            GenerateQRCode(e);
          }}
        />
      </p>
    </div>
  );
}
