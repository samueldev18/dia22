import { Link } from "react-router-dom";

export default function Poesia() {
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
            marginBottom: 24,
            fontSize: 22
          }}
        >
          Poesia
        </h1>

        {/* TEXTO POÉTICO */}
        <div
          style={{
            color: "#5b21b6",
            fontSize: 16,
            lineHeight: 1.9,
            flexGrow: 1,
            whiteSpace: "pre-line"
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

        {/* BOTÃO DE RETORNO */}
        <Link to="/escolha">
          <button
            style={{
              marginTop: 20,
              background: "transparent",
              border: "none",
              color: "#6d28d9",
              fontSize: 14,
              cursor: "pointer",
              alignSelf: "center"
            }}
          >
            ← Voltar para escolha
          </button>
        </Link>
      </div>
    </div>
  );
}
