import { createContext, useContext } from "react";

const AuthenticationContextDefaultValues = {
  loggedIn: false,
};

export const AuthenticationContext = createContext(
  AuthenticationContextDefaultValues
);

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
