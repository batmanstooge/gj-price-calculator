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
import { useAuthentication } from "../contexts/AuthenticationContext";
import { firebaseAuth } from "../firebase/firebase";
import {
  validateEmail,
  validatePassword,
  validateRepeatPassword,
} from "../utils/validations";
import "./HomePage.css";

interface statusType {
  loading: boolean;
  error: any;
}

const SignupPage: React.FC = () => {
  const { loggedIn } = useAuthentication();
  const [email, setEmail] = useState<string | null | undefined>("");
  const [password, setPassword] = useState<string | null | undefined>("");
  const [repeatPassword, setRepeatPassword] = useState<
    string | null | undefined
  >("");
  const [status, setStatus] = useState<statusType>({
    loading: false,
    error: null,
  });
  if (loggedIn) {
    return <Redirect to="/authenticated/home" />;
  }
  const handleSignup = async () => {
    try {
      validateEmail(email);
      validatePassword(password);
      console.log("password", password);
      validateRepeatPassword(password, repeatPassword);
      setStatus({ loading: true, error: null });
      const userCredential = await firebaseAuth.createUserWithEmailAndPassword(
        email ? email : "",
        password ? password : ""
      );
      console.log(userCredential);
    } catch (error) {
      setStatus({ loading: false, error: error });
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              type="email"
              onIonChange={(event) => setEmail(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(event) => setPassword(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Repeat Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(event) => setRepeatPassword(event.detail.value)}
            />
          </IonItem>
        </IonList>
        {status.error && (
          <IonText color="danger">{status.error.message}</IonText>
        )}
        <IonButton expand="block" onClick={handleSignup}>
          Signup
        </IonButton>
        <IonButton expand="block" fill="clear" routerLink="/login">
          Already signed in? Login
        </IonButton>
        <IonLoading isOpen={status.loading} />
      </IonContent>
    </IonPage>
  );
};

export default SignupPage;
