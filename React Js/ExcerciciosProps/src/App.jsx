import "./App.css"
import Saudacao from './components/exercicio01/Saudacao';
import Produto from './components/exercicio02/Produto';
import Mycomponent from "./components/children/mycomponent"
import Botao from "./components/excercicio04/botao"
import filme from "./components/excercicio05/filme"
import Card from "./components/excercicio07/card"
import Contato from './components/exercicio08/Contato';
import Jogo from './components/exercicio09/Jogo'
import ItemLoja from './components/exercicio10/ItemLoja';
import Pessoa from './components/desafio/Pessoa';

const App = () => {

// function App() {
//   return (
//     <div>
//       <Produto 
//         nome="Teclado Mecânico" 
//         preco="250,00" 
//         descricao="Teclado RGB com switches azuis e layout ABNT2." 
//       />
      
//       <Produto 
//         nome="Mouse Gamer" 
//         preco="120,00" 
//         descricao="Mouse óptico de 3200 DPI com 6 botões programáveis." 
//       />
      
//       <Produto 
//         nome="Monitor 24' LED" 
//         preco="890,00" 
//         descricao="Monitor Full HD com taxa de atualização de 775Hz." 
//       />
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////
// function App() {
//   return (
//     <div>
//       <Saudacao nome="Ricardo" />
//       <Saudacao nome="Beatriz" />
//       <Saudacao nome="Felipe" />
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
// function App() {
//   // 1. Criando a lista com 5 contatos
//   const listaContatos = [
//     { id: 1, nome: "Alice Souza", telefone: "(11) 98888-0001", email: "alice@email.com" },
//     { id: 2, nome: "Bruno Lima", telefone: "(21) 97777-0002", email: "bruno@email.com" },
//     { id: 3, nome: "Carla Dias", telefone: "(31) 96666-0003", email: "carla@email.com" },
//     { id: 4, nome: "Daniel Reis", telefone: "(41) 95555-0004", email: "daniel@email.com" },
//     { id: 5, nome: "Elena Martins", telefone: "(51) 94444-0005", email: "elena@email.com" }
//   ];

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Lista de Contatos</h1>
      
//       {/* 2. Exibindo todos utilizando o .map() */}
//       {listaContatos.map((contato) => (
//         <Contato 
//           key={contato.id} // Sempre use uma key única ao usar .map
//           nome={contato.nome} 
//           telefone={contato.telefone} 
//           email={contato.email} 
//         />
//       ))}
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//       <Jogo 
//         nome="Elden Ring" 
//         plataforma="PS5 / PC" 
//         preco="249,90" 
//         imagem="https://youtube.com" 
//       />
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   return (
//     <div style={{ display: 'flex' }}>
//       <ItemLoja 
//         nome="Mouse Sem Fio" 
//         preco="89,90" 
//         categoria="Periféricos" 
//         estoque={10} 
//       />
//       <ItemLoja 
//         nome="Teclado Gamer" 
//         preco="199,90" 
//         categoria="Periféricos" 
//         estoque={0} 
//       />
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const pessoas = [
//     { 
//       id: 1, 
//       nome: "Marcos", 
//       sobrenome: "Oliveira", 
//       idade: 28, 
//       cidade: "São Paulo", 
//       foto: "https://pravatar.cc" 
//     },
//     { 
//       id: 2, 
//       nome: "Mariana", 
//       sobrenome: "Luz", 
//       idade: 24, 
//       cidade: "Curitiba", 
//       foto: "https://pravatar.cc" 
//     },
//     { 
//       id: 3, 
//       nome: "Ricardo", 
//       sobrenome: "Gomes", 
//       idade: 35, 
//       cidade: "Recife", 
//       foto: "https://pravatar.cc" 
//     }
//   ];

//   return (
//     <div className="container-lista">
//       <h1>Membros da Comunidade</h1>
      
//       {pessoas.map((p) => (
//         <Pessoa 
//           key={p.id}
//           nome={`${p.nome} ${p.sobrenome}`} // Concatenando nome e sobrenome
//           idade={p.idada} // Ops, idade!
//           idade={p.idade}
//           cidade={p.cidade}
//           foto={p.foto}
//         />
//       ))}
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////////////////

return (
    <Card>
      <Botao cor="red" texto="texto do botao"/>
      <Botao cor="green" texto="texto do botao"/>
      <p>Lorem ipsum dolor,</p>
    </Card>
  );
};

export default App;

