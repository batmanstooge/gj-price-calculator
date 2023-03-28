import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Results } from "../components/results.component";
import { Variables } from "../components/variables.component";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculate Price</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Variables />
        <IonButton expand="block">Calculate</IonButton>
        <Results />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
