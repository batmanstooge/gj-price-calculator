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

const SettingsPage: React.FC = () => {
  useContext(AppContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/settings/price">
            <IonIcon slot="start" icon={cashOutline} />
            <IonText>Price</IonText>
          </IonItem>
          <IonItem button routerLink="/settings/discounts">
            <IonIcon slot="start" icon={discOutline} />
            <IonText>Discounts</IonText>
          </IonItem>
          <IonItem button>
            <IonIcon slot="start" icon={exitOutline} />
            <IonText>Logout</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
