import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
} from "@ionic/react";
import { Variables } from "./variables.component";

export const Search = () => (
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>Variables</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <IonList>
        <Variables />
      </IonList>
      <IonButton expand="block">Calculate</IonButton>
    </IonCardContent>
  </IonCard>
);
