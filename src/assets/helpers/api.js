const API_URL = "http://localhost:3000/users";

export const login = async (username, password) => {
  const resp = await fetch(
    `${API_URL}?username=${username}&password=${password}`
  );
  const users = await resp.json();
  return await users[0];
};

export const register = async (user) => {
  const resp = await fetch(`${API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return await resp.json();
};
