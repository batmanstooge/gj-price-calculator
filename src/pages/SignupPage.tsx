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
import { firebaseAuth, firestore } from "../firebase/firebase";
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

interface SignupPageProps {
  onSignup: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSignup }) => {
  const [email, setEmail] = useState<string | null | undefined>("");
  const [password, setPassword] = useState<string | null | undefined>("");
  const [repeatPassword, setRepeatPassword] = useState<
    string | null | undefined
  >("");
  const [status, setStatus] = useState<statusType>({
    loading: false,
    error: null,
  });
  const handleSignup = async () => {
    try {
      validateEmail(email);
      validatePassword(password);
      validateRepeatPassword(password, repeatPassword);
      setStatus({ loading: true, error: null });
      const userCredential = await firebaseAuth.createUserWithEmailAndPassword(
        email ? email : "",
        password ? password : ""
      );
      const userUid = userCredential.user?.uid;
      await firestore.collection("users").add({
        uid: userUid,
        role: "user",
        email: email,
      });
      onSignup();
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
