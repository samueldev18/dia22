import { Link } from "react-router-dom";

export default function Poesia() {
  return (
    <div
      style={{
        backgroundColor: "#c4b5fd",
        paddingTop: 80,
        paddingBottom: 120, // fundo continua depois do texto
        paddingLeft: 12,
        paddingRight: 12
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 393,
          margin: "0 auto",
          backgroundColor: "rgba(255,255,255,0.96)",
          paddingTop: 48,
          paddingBottom: 64, // área branca mais longa
          paddingLeft: 24,
          paddingRight: 24,
          borderRadius: 28
        }}
      >
        <h1
          style={{
            color: "#4c1d95",
            textAlign: "center",
            marginBottom: 40,
            fontSize: 22
          }}
        >
          Saudade
        </h1>

        {/* TEXTO LONGO */}
        <div
          style={{
            color: "#5b21b6",
            fontSize: 16,
            lineHeight: 2,
            whiteSpace: "pre-line",
            marginBottom: 80 // espaço antes do botão
          }}
        >
{`
Saudade é o sentimento que me acompanha
Acompanha quando eu te perco de vista
Quando nossos olhos não se cruzam mais
Quando não posso nem ao menos ver sua silhueta 

A Saudade bate
Bate quando não podemos se entregar as conversas longas
Quando o abraço apertado não alcança 
Quando os labios não se tocam
E os olhos não podem se observar

Eu sinto Saudade
Quando não posso aprecia-la 
Apreciar a beleza de seu rosto delicado
Seu sorriso radiante
Seu olhos que carregam o universo neles
E os sinais de seu rosto que são como um carimbo querendo informar que ela é a única 

A Saudade é cruel
Cruel porque os momentos ao seu lado são como uma viagem ao paraíso 
Essa Saudade nunca passa
Isso prova o quanto a vida ao seu lado é linda
Tão linda que a primeira coisa que acontece quando você vai, é sentir Saudade
Saudade de você mais uma vez...


`}
        </div>

        {/* RETORNO */}
        <div style={{ textAlign: "center" }}>
          <Link to="/escolha">
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#6d28d9",
                fontSize: 20,
                cursor: "pointer"
              }}
            >
              ← Voltar 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
