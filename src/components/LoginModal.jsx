import React, { useEffect, useState } from "react";
import { login } from "../assets/helpers/api";
import { setUserSession } from "../assets/helpers/auth";

function LoginModal({ setShowLogin, setShowRegi, onUserLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await login(username, password);

    if (!isChecked) {
      alert(
        "You have to agree to our terms and conditions to be able to login!"
      );
    }
    try {
      if (user) {
        setUserSession(user);
        onUserLogin(user);
        console.log("log från login " + user.username);
      } else {
        alert("Username or password is wrong, try again!");
      }
    } catch (error) {
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className="login-modal">
      <h1>Login</h1>
      <button className="login-close" onClick={() => setShowLogin(false)}>
        <img src="/src/assets/icons/closeXblack.svg" alt="" />
      </button>
      <form onSubmit={handleLogin}>
        <div className="login-input">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-text">
          <p>
            <span className="dont-have">Don't have an account?</span>
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
            <input
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              type="checkbox"
              id="terms"
              name="terms"
            />{" "}
            I agree to the terms and conditions
          </label>
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginModal;
