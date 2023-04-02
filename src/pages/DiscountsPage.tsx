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

const DiscountsPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { discount, onEditDiscount } = useContext(AppContext);
  const [enteredDiscount, setEnteredDiscount] = useState<any>(discount);
  const handleEditDiscountChange = (event: { detail: { value: any } }) => {
    setEnteredDiscount(event.detail.value);
  };

  const handleDiscountSave = async () => {
    setLoading(true);
    await firestore.collection("discount").doc("discount").set(
      {
        discount: +enteredDiscount,
      },
      { merge: true }
    );

    if (onEditDiscount) onEditDiscount(enteredDiscount);
    setLoading(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Discount</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Edit Discount</IonLabel>
            <IonInput
              type="number"
              value={enteredDiscount}
              onIonChange={handleEditDiscountChange}
            />
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={handleDiscountSave}>
          Save
        </IonButton>
        <IonLoading isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default DiscountsPage;
