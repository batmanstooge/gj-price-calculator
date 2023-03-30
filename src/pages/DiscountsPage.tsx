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

const DiscountsPage: React.FC = () => {
  const { discount, onEditDiscount } = useContext(AppContext);
  const [enteredDiscount, setEnteredDiscount] = useState<any>(discount);
  const handleDiscountChange = (event: { detail: { value: any } }) => {
    setEnteredDiscount(event.detail.value);
  };

  const handleDiscountSave = () => {
    if (onEditDiscount) onEditDiscount(enteredDiscount);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Discounts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Edit Discount</IonLabel>
            <IonInput
              type="number"
              value={enteredDiscount}
              onIonChange={handleDiscountChange}
            />
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={handleDiscountSave}>
          Save
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DiscountsPage;
