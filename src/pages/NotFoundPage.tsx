import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page Not Found</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>Page Not Found</IonText>
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
