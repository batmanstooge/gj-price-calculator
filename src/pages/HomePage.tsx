import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Results } from "../components/results.component";
import { Search } from "../components/search.component";
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
        <Search />

        <Results />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
