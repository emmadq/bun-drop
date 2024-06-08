import React, { useEffect, useState } from "react";
import { register } from "../assets/helpers/api";
import { setUserSession } from "../assets/helpers/auth";
import useFetch from "../hooks/useFetch";

function RegisterModal({ setShowRegi, setShowLogin, onUserRegister }) {
  const [username, setUsername] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [password, setPassword] = useState("");
  const {
    data: users,
    loading,
    error,
  } = useFetch("http://localhost:3000/users");
  const [takenUser, setTakenUser] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (users && Array.isArray(users)) {
      const isUserTaken = users.some((u) => u.username === username);
      setTakenUser(isUserTaken);
      if (isUserTaken && username !== "") {
        alert(
          "This username is already taken! Please choose a different username"
        );
      }
    }

    if (!isChecked) {
      alert(
        "You have to agree to our terms and conditions to be able to register!"
      );
    }
    const user = { username, password, order: [], favo: [] };
    const newUser = await register(user);
    if (newUser && !isUserTaken && isChecked) {
      setUserSession(newUser);
      onUserRegister(newUser);
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="regi-modal">
      <h1>Register</h1>
      <button className="regi-close" onClick={() => setShowRegi(false)}>
        <img src="/src/assets/icons/closeXblack.svg" alt="" />
      </button>
      <p>
        <span className="dont-have">Already have an account?</span>
        <span>
          <a
            onClick={(e) => {
              e.preventDefault();
              setShowLogin(true);
              setShowRegi(false);
            }}
            href=""
          >
            Sign in here!
          </a>
        </span>
      </p>
      <form onSubmit={handleRegister}>
        <div className="regi-input">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => {
              if (takenUser) {
                alert("Username is taken, choose a different username!");
              }
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password again"
            onBlur={(e) =>
              password === e.target.value
                ? setPasswordAgain(e.target.value)
                : alert("Password does not match")
            }
            required
          />
        </div>
        <div className="regi-text">
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
        <button className="regi-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterModal;
