import MenuLateral from "./menu-lateral/menu-lateral";

function App() {
  return (
    <div className="row min-vh-100 flex-md-row flex-column">
      <div className="col-12 col-md-3 h-md-100">
        <MenuLateral></MenuLateral>
      </div>
      <div className="col-12 col-md-7 h-md-100">Conteúdo</div>
    </div>
  );
}

export default App;
