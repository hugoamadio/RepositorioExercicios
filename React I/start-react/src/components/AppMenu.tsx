import { Link } from "react-router-dom";

function AppMenu() {
  return (
    <div>
      <Link to={"/"}>Home</Link> | <Link to={"/products"}>Produtos</Link> |{" "}
      <Link to={"/contact"}>Contato</Link>
    </div>
  );
}

export default AppMenu;
