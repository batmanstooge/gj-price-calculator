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
import { firebaseAuth, firestore } from "../firebase/firebase";
import { validateEmail, validatePassword } from "../utils/validations";
import "./HomePage.css";

interface LoginPageProps {
  loggedIn: boolean;
  onLogin: (role: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ loggedIn, onLogin }) => {
  const [email, setEmail] = useState<string | null | undefined>("");
  const [password, setPassword] = useState<string | null | undefined>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  if (loggedIn) {
    return <Redirect to="/authenticated/home" />;
  }
  const handleLogin = async () => {
    try {
      validateEmail(email);
      validatePassword(password);
      setLoading(true);
      setError(null);
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(
        email ? email : "",
        password ? password : ""
      );
      let role = "user";
      const userQuerySnapshot = await firestore
        .collection("users")
        .where("uid", "==", userCredential.user?.uid)
        .get();
      userQuerySnapshot.forEach((userDoc) => {
        role = userDoc.data().role;
      });
      setLoading(false);
      setError(null);
      if (onLogin) onLogin(role);
    } catch (error) {
      setLoading(false);
      setError(error);
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
        {error && <IonText color="danger">{error.message}</IonText>}
        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>
        <IonButton expand="block" fill="clear" routerLink="/signup">
          Not Signedup? Signup
        </IonButton>
        <IonLoading isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
