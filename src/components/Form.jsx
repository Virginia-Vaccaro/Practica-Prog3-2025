import { useState } from "react";

const Form = ({ onSubmit, errores, refs, formEnviado }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          ref={refs.nameRef}
        />
        {errores.name && <p style={{ color: "red" }}>{errores.name}</p>}
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          ref={refs.emailRef}
        />
        {errores.email && <p style={{ color: "red" }}>{errores.email}</p>}
      </div>
      <div>
        <label>Contraseña: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          ref={refs.passwordRef}
        />
        {errores.password && <p style={{ color: "red" }}>{errores.password}</p>}
      </div>
      <div>
        <label>Confirmar contraseña: </label>
        <input
          type="password"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          ref={refs.confirmRef}
        />
        {errores.confirm && <p style={{ color: "red" }}>{errores.confirm}</p>}
      </div>
      <button type="submit">Enviar</button>
      {formEnviado && (
        <p style={{ color: "green" }}>Formulario enviado con éxito</p>
      )}
    </form>
  );
};

export default Form;
