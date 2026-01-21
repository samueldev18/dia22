import { Link } from "react-router-dom";
import imageNos from "../assets/imageNos.jpg";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#c4b5fd",
        display: "flex",
        justifyContent: "center"
      }}
    >
      {/* Área simulando iPhone 15 */}
      <div
        style={{
          width: "100%",
          maxWidth: 393,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20
        }}
      >
        {/* Card central */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)",
            padding: 28,
            borderRadius: 24,
            textAlign: "center",
            width: "100%"
          }}
        >
          <h1
            style={{
              color: "#4c1d95",
              marginBottom: 16,
              fontSize: 26,
              lineHeight: 1.2
            }}
          >
            Feliz dia 22, meu amor💜
          </h1>

          <p
            style={{
              color: "#5b21b6",
              fontSize: 16,
              lineHeight: 1.6,
              marginBottom: 20
            }}
          >
           Quis fazer uma surpresa um pouco diferente dessa vez, apesar de simples, saiba que é com o maior carinho do mundo,
           amo essa data e tinha que fazer algo para demonstrar o quanto eu amo nosso dia 22.
          </p>

          {/* IMAGEM */}
          <img
            src={imageNos}
            alt="Imagem especial"
            style={{
              width: "100%",
              maxWidth: 220,
              borderRadius: 16,
              marginBottom: 24
            }}
          />

          <Link to="/sobre" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "100%",
                height: 48,
                borderRadius: 999,
                border: "none",
                backgroundColor: "#7c3aed",
                color: "#fff",
                fontSize: 16,
                fontWeight: 500,
                cursor: "pointer"
              }}
            >
              Presentinho →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
