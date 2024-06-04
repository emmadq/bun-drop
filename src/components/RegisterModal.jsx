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

  useEffect(() => {
    if (users && Array.isArray(users)) {
      const isUserTaken = users.some((u) => u.username === username);
      setTakenUser(isUserTaken);
    }
  }, [users, username]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = { username, password, order: [], favo: [] };
    const newUser = await register(user);
    if (newUser) {
      setUserSession(newUser);
      onUserRegister(newUser);
      console.log("log from register " + user.username);
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-modal">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => {
              if (takenUser) {
                alert("Username is taken, choose a different username!");
              }
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password again"
            onBlur={(e) =>
              password === e.target.value
                ? setPasswordAgain(e.target.value)
                : alert("Password does not match")
            }
          />
        </div>
        <div>
          <p>
            <span>Already have an account?</span>
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
          <label htmlFor="terms">
            <input type="checkbox" id="terms" name="terms" /> I agree to the
            terms and conditions
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterModal;
