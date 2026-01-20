import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Página Sobre 📄</h1>
      <p>Essa é a segunda página.</p>

      <Link to="/">
        ← Voltar para Home
      </Link>
    </div>
  );
}
