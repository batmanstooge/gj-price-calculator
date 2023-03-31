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
import "./HomePage.css";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const { loggedIn } = useAuthentication();
  const [email, setEmail] = useState<string | null | undefined>("");
  const [password, setPassword] = useState<string | null | undefined>("");
  const [status, setStatus] = useState({ loading: false, error: false });
  if (loggedIn) {
    return <Redirect to="/authenticated/home" />;
  }
  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(
        email ? email : "",
        password ? password : ""
      );
      console.log(userCredential);
      setStatus({ loading: false, error: false });
      onLogin();
    } catch (error) {
      setStatus({ loading: false, error: true });
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
        </IonList>
        {status.error && <IonText color="danger">Invalid Credentials</IonText>}
        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>
        <IonLoading isOpen={status.loading} />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
