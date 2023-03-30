import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Redirect } from "react-router";
import { firebaseAuth } from "../firebase/firebase";
import "./HomePage.css";

interface LoginProps {
  loggedIn: boolean;
  onLogin: () => void;
}

const LoginPage: React.FC<LoginProps> = ({ loggedIn, onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState<string | null | undefined>(
    ""
  );

  const [enteredPassword, setEnteredPassword] = useState<
    string | null | undefined
  >("");

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (loggedIn) {
    return <Redirect to="/authenticated/home" />;
  }
  const loginHandler = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(
        enteredEmail ? enteredEmail : "",
        enteredPassword ? enteredPassword : ""
      );
      setIsLoading(false);
      onLogin();
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              type="email"
              value={enteredEmail}
              onIonChange={(event) => setEnteredEmail(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type="password"
              value={enteredPassword}
              onIonChange={(event) => setEnteredPassword(event.detail.value)}
            />
          </IonItem>
        </IonList>
        {error && <IonText color="danger">Invalid Credentials</IonText>}
        <IonButton expand="block" onClick={loginHandler}>
          Login
        </IonButton>
        <IonLoading isOpen={isLoading} />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
