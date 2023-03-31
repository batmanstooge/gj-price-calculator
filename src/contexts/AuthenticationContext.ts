import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase/firebase";

interface Authentication {
  loggedIn: boolean;
  userId?: string;
}

interface FirebaseAuthentication {
  loading: boolean;
  authentication?: Authentication | undefined;
}

const AuthenticationContextDefaultValues = {
  loggedIn: false,
};

export const AuthenticationContext = createContext<Authentication>(
  AuthenticationContextDefaultValues
);

export function useAuthentication(): Authentication {
  return useContext(AuthenticationContext);
}

export function useFirebaseAuthentication(): FirebaseAuthentication {
  const [authStateChangedStatus, setAuthStateChangedStatus] =
    useState<FirebaseAuthentication>({
      loading: true,
    });
  useEffect(() => {
    return firebaseAuth.onAuthStateChanged((firebaseUser) => {
      const firebaseAuth = firebaseUser
        ? { loggedIn: true, userId: firebaseUser.uid }
        : { loggedIn: false };
      setAuthStateChangedStatus({
        loading: false,
        authentication: firebaseAuth,
      });
    });
  }, []);
  return authStateChangedStatus;
}
