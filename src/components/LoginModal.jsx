import React, { useEffect, useState } from "react";
import { login } from "../assets/helpers/api";
import { setUserSession } from "../assets/helpers/auth";

function LoginModal({ setShowLogin, setShowRegi, onUserLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    if (user) {
      setUserSession(user);
      onUserLogin(user);
      console.log("log från login " + user.username);
    } else {
      alert("Username or password is wrong, try again!");
    }
  };

  return (
    <div className="login-modal">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <p>
            <span>Don't have an account?</span>
            <span>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegi(true);
                  setShowLogin(false);
                }}
                href=""
              >
                Register here!
              </a>
            </span>
          </p>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" name="terms" /> I agree to the
            terms and conditions
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginModal;
