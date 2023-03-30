import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import "./Settings.css";

const PricePage: React.FC = () => {
  const { price, onEditPrice } = useContext(AppContext);
  const [enteredPrice, setEnteredPrice] = useState<any>(price);
  const handleEditPriceChange = (event: { detail: { value: any } }) => {
    setEnteredPrice(event.detail.value);
  };

  const handlePriceSave = () => {
    if (onEditPrice) onEditPrice(enteredPrice);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Price</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Edit Price</IonLabel>
            <IonInput
              type="number"
              value={enteredPrice}
              onIonChange={handleEditPriceChange}
            />
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={handlePriceSave}>
          Save
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PricePage;
