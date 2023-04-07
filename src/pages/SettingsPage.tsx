import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { cashOutline, discOutline, exitOutline } from "ionicons/icons";
import "./Settings.css";
import { firebaseAuth } from "../firebase/firebase";
import { Redirect } from "react-router";

interface SettingsPageProps {
  role: string;
  onSignout: () => void;
  loggedIn: boolean;
}

const SettingsPage: React.FC<SettingsPageProps> = ({
  role,
  onSignout,
  loggedIn,
}) => {
  useContext(AppContext);
  const onSignoutHandler = async () => {
    await firebaseAuth.signOut();
    onSignout();
  };
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {role === "admin" && (
            <IonItem button routerLink="/authenticated/settings/cost">
              <IonIcon slot="start" icon={cashOutline} />
              <IonText>Cost</IonText>
            </IonItem>
          )}
          {role === "admin" && (
            <IonItem button routerLink="/authenticated/settings/discounts">
              <IonIcon slot="start" icon={discOutline} />
              <IonText>Discounts</IonText>
            </IonItem>
          )}
          <IonItem button onClick={onSignoutHandler}>
            <IonIcon slot="start" icon={exitOutline} />
            <IonText>Logout</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
