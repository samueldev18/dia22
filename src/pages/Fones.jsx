import { Link } from "react-router-dom";

export default function Fones() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#8b5cf6", // lilás mais escuro
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}
    >
      <div
        style={{
          maxWidth: 393,
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.92)",
          padding: 32,
          borderRadius: 28,
          textAlign: "center"
        }}
      >
        {/* ÍCONE COM ANIMAÇÃO */}
        <div
          style={{
            fontSize: 64,
            marginBottom: 20,
            animation: "pulse 2s infinite"
          }}
        >
          🎧
        </div>

        <h1
          style={{
            color: "#4c1d95",
            marginBottom: 12,
            fontSize: 22
          }}
        >
          Use fones de ouvido
        </h1>

        <p
          style={{
            color: "#5b21b6",
            marginBottom: 28,
            fontSize: 15,
            lineHeight: 1.6
          }}
        >
          Use os fones para uma melhor experiência, meu amor.
        </p>

        <Link to="/texto">
          <button style={botaoStyle}>
            Continuar
          </button>
        </Link>
      </div>

      {/* CSS DA ANIMAÇÃO */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.08);
              opacity: 0.85;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

const botaoStyle = {
  width: "100%",
  height: 48,
  borderRadius: 999,
  border: "none",
  backgroundColor: "#6d28d9",
  color: "#fff",
  fontSize: 16,
  cursor: "pointer"
};
