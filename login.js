import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  // declare state vars
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    setSuccessMsg("");
    const postData = { email, password };
    axios
      .post("http://localhost:8000/api/login", postData, {
        withCredentials: true,
      })
      .then((response) => setSuccessMsg(response.data.message))
      .catch((err) => setErr(err.response.data.err));
  };
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/logout")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {err && <h3 style={{ color: "red" }}>{err}</h3>}
      {successMsg.length > 0 && (
        <h3 style={{ color: "green" }}>{successMsg}</h3>
      )}
      <div>
        Email: <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        Password:{" "}
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">SUBMIT</button>
      <button onClick={() => handleLogout()}>LOGOUT</button>
    </form>
  );
};

export default Login;
