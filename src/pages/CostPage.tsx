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

const CostPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { cost, onEditCost } = useContext(AppContext);
  const [enteredCost, setEnteredCost] = useState<any>(cost);
  const handleEditCostChange = (event: { detail: { value: any } }) => {
    setEnteredCost(event.detail.value);
  };

  const handlePriceSave = async () => {
    setLoading(true);
    const modifiedDateISOString = new Date().toISOString();
    await firestore.collection("costs").doc("cost").set(
      {
        cost: +enteredCost,
        modified: modifiedDateISOString,
      },
      { merge: true }
    );

    if (onEditCost) onEditCost(enteredCost, modifiedDateISOString);
    setLoading(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cost</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Edit Cost</IonLabel>
            <IonInput
              type="number"
              value={enteredCost}
              onIonChange={handleEditCostChange}
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

export default CostPage;
