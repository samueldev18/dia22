import { useState } from "react";
import { Link } from "react-router-dom";
import musica from "../assets/musica.mp3";

export default function Texto() {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#c4b5fd",
        display: "flex",
        justifyContent: "center",
        padding: 20
      }}
    >
      <div
        style={{
          maxWidth: 393,
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.92)",
          padding: 28,
          borderRadius: 24,
          display: "flex",
          flexDirection: "column",
          minHeight: "90vh"
        }}
      >
        <h1
          style={{
            color: "#4c1d95",
            textAlign: "center",
            marginBottom: 20,
            fontSize: 26
          }}
        >
          Dê o play, meu bem 🎵
        </h1>

        <audio
          controls
          style={{ width: "100%" }}
          onPlay={() => setMostrarTexto(true)}
        >
          <source src={musica} type="audio/mpeg" />
        </audio>

        {/* TEXTO COM FADE-IN */}
        <div
          style={{
            marginTop: 24,
            opacity: mostrarTexto ? 1 : 0,
            transition: "opacity 1.5s ease",
            color: "#5b21b6",
            fontSize: 16,
            lineHeight: 1.7,
            flexGrow: 1
          }}
        >
          <p>
            Desde que você entrou na minha vida, tudo ficou mais leve.
            Esse texto é só um jeito simples de dizer o quanto você é
            importante pra mim.
          </p>

          <p>
            Obrigado por ser quem você é. De verdade.
          </p>
        </div>

        {/* BOTÃO DE RETORNO */}
        <Link to="/escolha">
          <button
            style={{
              marginTop: 20,
              background: "#6d28d9",
              border: "none",
              color: "#ffffff",
              fontSize: 20,
              cursor: "pointer",
              alignSelf: "center"
            }}
          >
            ← Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}
