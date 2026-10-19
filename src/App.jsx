import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'  

function ContadorDobro(){
  const [numero, setNumero] = useState(1);

function dobrar(){
  setNumero((valorAnterior) => valorAnterior*2);
}
return (
  <div>
    <p>valor atual:{numero}</p>
    <button onClick={dobrar}>multiplicar por 2</button>
    <button onClick={() => setNumero(1)}>voltar a 1</button>
  </div>
);
}

function Contador() {
  const [contador, setContador] = useState(0);
  function aumentar() {
    setContador((anterior) => anterior + 1);
  }
  return (
    <div>
      <p>Valor atual: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}

function Aviso() {
  const [visivel, setVisivel] = useState(false);
  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        Alternar aviso
      </button>
      {visivel && <p>O aviso está visível!</p>}
    </div>
  );
}

function Saudacao() {
  const [nome, setNome] = useState("");
  return (
    <div>
      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Olá, {nome || "visitante"}!</p>
    </div>
  );
}

function CartaoBoasVindas() {
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);
  return (
    <div>
      <input value={nome}onChange={(evento) => setNome(evento.target.value)}placeholder="Digite seu nome"/>
      <button onClick={() => setMostrarSaudacao(!mostrarSaudacao)}>
        Mostrar / Esconder saudação
      </button>
      {mostrarSaudacao && (
        <p>Olá, {nome || "visitante"}!</p>
      )}
    </div>
  );
}

function ContadorComMeta() {
  const [contador, setContador] = useState(0);
  function aumentar() {
    setContador((anterior) =>
      anterior >= 10 ? anterior : anterior + 1
    );
  }

function reiniciar() {
  setContador(0);
  }

  return (
    <div>
      <p>Contador: {contador}</p>
      {contador === 10 && <p>Meta atingida!</p>}
      <button onClick={aumentar} disabled={contador === 10}>
        Aumentar
      </button>
      <button onClick={reiniciar}>
        Voltar ao zero
      </button>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Atividades de React</h1>
      <h2>Missão 1 — Contador</h2>
      <Contador />
      <hr />
      <h2>Missão 2 — Mostrar e esconder um aviso</h2>
      <Aviso />
      <hr />
      <h2>Missão 3 — Saudação com campo de texto</h2>
      <Saudacao />
      <hr />
      <h2>Desafio final — Cartão de boas-vindas</h2>
      <CartaoBoasVindas />
      <hr />
      <h2>Desafio extra — Contador com meta</h2>
      <ContadorComMeta />
      <h2>Desafio ainda mais Extra — Contador que Dobra</h2>
      <ContadorDobro />
    </main>
  )
}

export default App;
