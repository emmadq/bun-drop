export const setUserSession = (user) => {
  localStorage.setItem(`user`, JSON.stringify(user));
};

export const getUserSession = () => {
  return JSON.parse(localStorage.getItem(`user`));
};

export const clearUserSession = () => {
  localStorage.removeItem(`user`);
};
