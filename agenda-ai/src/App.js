import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Desktop from "../src/assets/images/Captura de tela 2023-04-15 171318.png";
import Mobile1 from "../src/assets/images/Captura de tela 2023-06-12 153437.png";
import Mobile2 from"../src/assets/images/Captura de tela 2023-06-12 153024.png";
import Mobile3 from"../src/assets/images/Captura de tela 2023-06-12 153331.png";

function App() {
  return (
    <div className="App">
      <Header />
      <main class="main-index">
        <div class="parte-escrita">
            <div class="titulo">
                <h1>Agenda aí</h1>
            </div>
            <div class="subtitulo">
                <h2>Não espere pelo lanche, faça ele esperar por você!</h2>
            </div>
            <div class="botoes">
                <a href="/login_cadastro/cadastro.html"><h3>cadastro</h3></a>
                <a href="login_cadastro/login.html"><h3>login</h3></a>
            </div>
            <div class="titulo-vantagens">
                <h3>Vantagens de usar o nosso software:</h3>
            </div>
            <div class="vantagens">
                <h4>- praticidade na hora de agendar a compra de seu lanche</h4>
                <h4>- efetuar pagamento online antecipadamente</h4>
                <h4>- menor tempo gasto no resgate do lanche na cantina</h4>
                <h4>- garantia de aquisição do seu lanche preferencial</h4>
                <h4>- facilita a compra do lanche de seus filhos na(s) escola(s)</h4>
            </div>
            <div onclick="window.location.href='/cadastroCantinas/cadastroCantinas.html'" 
            class="botao-cadastrar-cantina"><h3>Cadastrar cantina</h3></div>
            <div class="titulo-sobre">
                <h3>Sobre o software:</h3>
            </div>
            <div class="sobre">
                <h2>V</h2>
            </div>
        </div>
        <aside>
            <img class="desktop" src={Desktop} alt="" />
            <section class="telas-mobile">
                <img class="mobile" src={Mobile1} alt="" />
                <img class="mobile" src={Mobile2} alt="" />
                <img class="mobile" src={Mobile3} alt="" />
            </section>
        </aside>
    </main>
    </div>
  );
}

export default App;
