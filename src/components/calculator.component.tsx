import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import {
  claritySelectOptions,
  colourSelectOptions,
  cutSelectOptions,
  polishSelectOptions,
  symmetrySelectOptions,
} from "../models/codelist.model";

export const Calculator = () => {
  const [colour, setColour] = useState("D");
  const [clarity, setClarity] = useState("FL");
  const [cut, setCut] = useState("X");
  const [polish, setPolish] = useState("X");
  const [symmetry, setSymmetry] = useState("X");
  return (
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
  );
};
