import Form from "../components/Form";
import Validations from "../components/Validations";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ setIsLoggedIn }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);
  const [errores, setErrores] = useState({});
  const [formEnviado, setFormEnviado] = useState(false);
  const navigate = useNavigate();

  const manejarEnvio = (FormData) => {
    const errores = Validations({ datos: FormData });

    if (Object.keys(errores).length > 0) {
      if (errores.name && nameRef.current) {
        nameRef.current.focus();
      } else if (errores.email && emailRef.current) {
        emailRef.current.focus();
      } else if (errores.password && passwordRef.current) {
        passwordRef.current.focus();
      } else if (errores.confirm && confirmRef.current) {
        confirmRef.current.focus();
      }

      setErrores(errores);
    } else {
      //alert("Formulario enviado con éxito");
      setErrores({});
      setIsLoggedIn(true);
      setFormEnviado(true);
      setTimeout(() => navigate("/perfil"), 2000);
    }
  };

  return (
    <>
      <div>
        <h1>Registro</h1>
        <Form
          onSubmit={manejarEnvio}
          errores={errores}
          refs={{ nameRef, emailRef, passwordRef, confirmRef }}
          formEnviado={formEnviado}
        />
      </div>
    </>
  );
}

export default FormPage;
