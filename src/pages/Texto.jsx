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
            Feliz dia 22, meu amor! amo quando esse dia chega, ele me trouxe e ainda continua me trazendo uma felicidade enorme.
            Esse dia faz eu reviver e lembrar da pessoa incrivel que ele me proporcionou, de nossa primeira troca de olhares, nosso primeiro "oi tudo bem, oi como voce tá?" KKKKKKKK,
            a conexão incrivel que sentimos com apenas um dia.
          </p>

          <p>
            O que seria apenas um dia de vôlei com uma pessoa que eu nem se quer sabia se iamos nos dar bem, acabou gerando uma grande relação, um grande amor, uma grande casa.
            Um lugar onde tudo é calmo, feliz, alegre, e mesmo nos momentos turbulentos e mais desafiadores, nunca largamos a mão um do outro, porque o amor que está em nosso peito supera qualquer tipo de desafio.
            Sempre lutamos um pelo outro, quando a força de um se esvai o outro apoia e ajuda a levantar. O carinho aqui existe de uma forma surreal, como se até em momentos não prováveis,
            é possivel sentir uma onda de cuidado e paixão. Nossas conversas tentando sempre resolver tudo me trazem paz, porque eu sei que sempre vamos tentar de tudo pra resolver qualuqer pendencia.
          </p>

          <p>
            Essa relação é a coisa mais valiosa que eu carrego, como uma jóia que só existe uma exemplar no mundo inteiro, tento sempre polir com amor, carinho, atenção, cuidado,
            pois seu brilho encanta e aquece o coração. Cada momento nosso é incrivel, cada risada, cada piada, troca de olhares, conversas profundas, conversas rasas,
            cada momento assistindo e comentando sobre, até a simples ação de comer juntos, tudo isso são momentos tão simples mas que com você carrega tanto sentimento, significado, carrega o que somos. Um casal, namorados, melhores amigos, nós somos perfeitos um pro outro.
          </p>

          <p>
            Queria agradecer por desde de sempre ser essa garota incrivel pra mim, cada ação sua faz eu me sentir sempre mais feliz, o jeito que voce fala comigo,
            o jeito de voce me tratar com carinho, de se importar com tudo que me envolve. O amor que voce demonstra por mim é tão lindo, as vezes eu penso na sorte que eu tenho por voce estar em minha vida.
            Obrigado pelo seu amor, pelo seu carinho, pelo seu cuidado, obrigado por ser a minha pessoa, obrigado por ser a garotinha que eu tanto amo.
          </p>

          <p>
            Feliz dia 22, minha vidinha do meu coração. Eu te amo tanto, que nenhuma palavra existente pode mensurar de forma alguma!💜
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
