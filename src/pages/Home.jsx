import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Página Home 🏠</h1>
      <p>Essa é a primeira página do PWA.</p>

      <Link to="/sobre">
        Ir para a segunda página →
      </Link>
    </div>
  );
}
