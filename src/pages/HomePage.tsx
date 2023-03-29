import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Calculator } from "../components/calculator.component";
import { Results } from "../components/results.component";
import {
  claritySelectOptions,
  colourSelectOptions,
  cutSelectOptions,
  polishSelectOptions,
  symmetrySelectOptions,
} from "../models/codelist.model";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [colour, setColour] = useState("D");
  const [clarity, setClarity] = useState("FL");
  const [cut, setCut] = useState("X");
  const [polish, setPolish] = useState("X");
  const [symmetry, setSymmetry] = useState("X");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculate Price</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Variables</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Colour</IonLabel>
                <IonSelect placeholder="Colour" value={colour}>
                  {colourSelectOptions.map((selectOption) => (
                    <IonSelectOption
                      key={selectOption.value}
                      value={selectOption.value}
                    >
                      {selectOption.label}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Clarity</IonLabel>
                <IonSelect placeholder="Clarity" value={clarity}>
                  {claritySelectOptions.map((selectOption) => (
                    <IonSelectOption
                      key={selectOption.value}
                      value={selectOption.value}
                    >
                      {selectOption.label}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Cut</IonLabel>
                <IonSelect placeholder="Cut" value={cut}>
                  {cutSelectOptions.map((selectOption) => (
                    <IonSelectOption
                      key={selectOption.value}
                      value={selectOption.value}
                    >
                      {selectOption.label}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Polish</IonLabel>
                <IonSelect placeholder="Polish" value={polish}>
                  {polishSelectOptions.map((selectOption) => (
                    <IonSelectOption
                      key={selectOption.value}
                      value={selectOption.value}
                    >
                      {selectOption.label}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Symmetry</IonLabel>
                <IonSelect placeholder="Symmetry" value={symmetry}>
                  {symmetrySelectOptions.map((selectOption) => (
                    <IonSelectOption
                      key={selectOption.value}
                      value={selectOption.value}
                    >
                      {selectOption.label}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            </IonList>
            <IonButton expand="block">Calculate</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Result For</IonCardTitle>
            <IonCardSubtitle>D-FL-X-X-X</IonCardSubtitle>
            <IonCardSubtitle>
              Price last modified on 12-May-2022
            </IonCardSubtitle>
            <IonCardSubtitle>
              Discount last modified on 12-May-2022
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <h1>1044.35</h1>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
