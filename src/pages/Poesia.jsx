import { Link } from "react-router-dom";

export default function Poesia() {
  return (
    <div
      style={{
        minHeight: "100svh", // altura real no mobile
        backgroundColor: "#c4b5fd",
        display: "flex",
        justifyContent: "center",
        padding: "16px 12px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 393,
          backgroundColor: "rgba(255,255,255,0.95)",
          padding: 24,
          borderRadius: 24,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h1
          style={{
            color: "#4c1d95",
            textAlign: "center",
            marginBottom: 20,
            fontSize: 22
          }}
        >
          Poesia
        </h1>

        {/* TEXTO */}
        <div
          style={{
            color: "#5b21b6",
            fontSize: 16,
            lineHeight: 1.9,
            whiteSpace: "pre-line",
            marginBottom: 24
          }}
        >
{`
Você chegou sem avisar,
e de repente tudo
aprendeu a ficar.

O dia ficou menos pesado,
o silêncio ganhou sentido,
e o tempo passou
a ter nome.

Se existir lugar seguro,
é onde seu riso mora.
`}
        </div>

        {/* RETORNO */}
        <Link to="/escolha" style={{ alignSelf: "center" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#6d28d9",
              fontSize: 14,
              cursor: "pointer"
            }}
          >
            ← Voltar para escolha
          </button>
        </Link>
      </div>
    </div>
  );
}
