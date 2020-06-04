import React, { useState, useEffect, useRef } from "react";
import "./Login.css";

const Login = ({ showModalLogin, handleLogin, error }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const txt1 = useRef(null);

  useEffect(() => {
    txt1.current.focus();
  }, []);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => showModalLogin()}>
            X
          </span>
          <h1 style={{ marginBottom: "40px" }}>LOGIN</h1>
          {error && "Invalid Email or Password"}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="custom-input"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => onChange(e)}
                ref={txt1}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="custom-input"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group" style={{ marginTop: "50px" }}>
              <button type="submit" className="button">
                Login
              </button>
            </div>
          </form>
          <p style={{ color: "#B1B1B1", fontSize: "18px" }}>
            Don't have an account ? Klik{" "}
            <span style={{ fontWeight: "900", cursor: "pointer" }}>Here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
