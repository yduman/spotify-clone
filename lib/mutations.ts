import httpClient from "./httpClient";

export const doAuth = (
  mode: "signUp" | "signIn",
  body: { email: string; password: string }
) => {
  return httpClient(`/api/auth/${mode}`, body);
};
