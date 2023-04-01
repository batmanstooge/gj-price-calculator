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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { firestore } from "../firebase/firebase";
import "./Settings.css";

const PricePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { price, onEditPrice } = useContext(AppContext);
  const [enteredPrice, setEnteredPrice] = useState<any>(price);
  const handleEditPriceChange = (event: { detail: { value: any } }) => {
    setEnteredPrice(event.detail.value);
  };

  const handlePriceSave = async () => {
    setLoading(true);
    await firestore.collection("price").doc("price").set(
      {
        price: +enteredPrice,
      },
      { merge: true }
    );

    if (onEditPrice) onEditPrice(enteredPrice);
    setLoading(false);
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
        <IonLoading isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default PricePage;
