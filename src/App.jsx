import { MainContent, Card, Tag } from "./components/Components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Meu Projeto React</h1>
        <p>Aprendendo a criar componentes</p>
      </header>

      <MainContent
        title="Conhecendo os Componentes"
        subtitle="Explore alguns exemplos de conteúdos criados com React."
      >
        <Card
          title="Componentes"
          description="Os componentes permitem dividir a interface em partes reutilizáveis."
        >
          <Tag>React</Tag>
          <Tag>Organização</Tag>
        </Card>

        <Card
          title="Props"
          description="As props permitem enviar informações de um componente para outro."
        >
          <p>Exemplo: título e descrição personalizados.</p>
          <Tag>Personalização</Tag>
        </Card>

        <Card
          title="Props.children"
          description="O children permite inserir conteúdos dentro de outros componentes."
        >
          <p>Este texto está dentro do componente Card!</p>
          <Tag>Conteúdo aninhado</Tag>
        </Card>
      </MainContent>

      <footer className="footer">
        <p>Projeto desenvolvido para praticar React.</p>
      </footer>
    </div>
  );
}

export default App;
