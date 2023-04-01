import { createContext } from "react";

interface AuthenticationContextValues {
  onLogin?: () => void;
}

const defaultAuthenticationContextValues: AuthenticationContextValues = {};

export const AuthenticationContext = createContext(
  defaultAuthenticationContextValues
);
