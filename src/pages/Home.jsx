import image22 from "../assets/image22";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${image22})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: 24,
          borderRadius: 16,
          textAlign: "center",
          maxWidth: 320
        }}
      >
        <h1 style={{ color: "#fff", marginBottom: 12 }}>
          Isso é pra você 💖
        </h1>

        <p style={{ color: "#e5e7eb", marginBottom: 20 }}>
          Fiz esse pequeno espaço pra te lembrar do quanto você é especial pra mim.
        </p>

        <Link to="/sobre">
          <button
            style={{
              padding: "12px 20px",
              borderRadius: 999,
              border: "none",
              backgroundColor: "#ec4899",
              color: "#fff",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            Continuar →
          </button>
        </Link>
      </div>
    </div>
  );
}
