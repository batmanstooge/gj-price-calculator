import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Calculator } from "../components/calculator.component";
import { Results } from "../components/results.component";
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
        <Calculator />
        <Results />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
