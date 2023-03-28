import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import {
  claritySelectOptions,
  colourSelectOptions,
  cutSelectOptions,
  polishSelectOptions,
  symmetrySelectOptions,
} from "../models/codelist.model";

export const Variables = () => (
  <IonList>
    <IonListHeader>
      <IonText>
        <h5>Variables</h5>
      </IonText>
    </IonListHeader>
    <IonItem>
      <IonLabel position="stacked">Colour</IonLabel>
      <IonSelect placeholder="Colour">
        {colourSelectOptions.map((selectOption) => (
          <IonSelectOption key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
    <IonItem>
      <IonLabel position="stacked">Clarity</IonLabel>
      <IonSelect placeholder="Clarity">
        {claritySelectOptions.map((selectOption) => (
          <IonSelectOption key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
    <IonItem>
      <IonLabel position="stacked">Cut</IonLabel>
      <IonSelect placeholder="Cut">
        {cutSelectOptions.map((selectOption) => (
          <IonSelectOption key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
    <IonItem>
      <IonLabel position="stacked">Polish</IonLabel>
      <IonSelect placeholder="Polish">
        {polishSelectOptions.map((selectOption) => (
          <IonSelectOption key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
    <IonItem>
      <IonLabel position="stacked">Symmetry</IonLabel>
      <IonSelect placeholder="Symmetry">
        {symmetrySelectOptions.map((selectOption) => (
          <IonSelectOption key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  </IonList>
);
