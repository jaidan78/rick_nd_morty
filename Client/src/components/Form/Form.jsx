import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

const { log, box, input, button } = styles;

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={log}>
      <form className={box} onSubmit={handleSubmit}>
        {/* USERNAME */}
        <label htmlFor="">Email</label>
        <input
          className={input}
          type="text"
          placeholder="Email..."
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}

        {/* PASSWORD */}
        <label htmlFor="">Password</label>
        <input
          className={input}
          type="password"
          placeholder="Password..."
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        <button className={button}>Login</button>
      </form>
    </div>
  );
};

export default Form;
