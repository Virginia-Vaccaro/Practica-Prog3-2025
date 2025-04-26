import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Bienvenido</h1>
      <button onClick={() => navigate("/formulario")}>Registrarse</button>
    </div>
  );
};

export default Home;
