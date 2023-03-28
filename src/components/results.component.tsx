import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
} from "@ionic/react";

export const Results = () => (
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>Result For</IonCardTitle>
      <IonCardSubtitle>D-FL-X-X-X</IonCardSubtitle>
      <IonCardSubtitle>Price last modified on 12-May-2022</IonCardSubtitle>
      <IonCardSubtitle>Discount last modified on 12-May-2022</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <IonText>
        <h1>1044.35</h1>
      </IonText>
    </IonCardContent>
  </IonCard>
);
