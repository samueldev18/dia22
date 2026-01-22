import { Link } from "react-router-dom";

export default function Escolha() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#c4b5fd",
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
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: 28,
          borderRadius: 24,
          textAlign: "center"
        }}
      >
        <h1 style={{ color: "#4c1d95", marginBottom: 20, fontSize: 27 }}>
          Escolha, minha vidinha 💜
        </h1>

        <Link to="/fones">
          <button style={botaoStyle}>Texto</button>
        </Link>

        <Link to="/poesia">
          <button style={{ ...botaoStyle, marginTop: 16 }}>
            Poesia
          </button>
        </Link>
      </div>
    </div>
  );
}

const botaoStyle = {
  width: "100%",
  height: 48,
  borderRadius: 999,
  border: "none",
  backgroundColor: "#7c3aed",
  color: "#fff",
  fontSize: 16,
  cursor: "pointer"
};
