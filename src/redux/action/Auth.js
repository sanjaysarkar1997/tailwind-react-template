export const Auth = (data) => {
  return { type: data.isLogged, payload: data };
};
