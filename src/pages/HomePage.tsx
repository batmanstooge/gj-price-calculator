import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./HomePage.css";

interface SelectOption {
  value: string;
  label: string;
}

const colourSelectOptions: SelectOption[] = [
  { label: "D", value: "D" },
  { label: "E", value: "E" },
  { label: "F", value: "F" },
  { label: "G", value: "G" },
  { label: "H", value: "H" },
  { label: "I", value: "I" },
  { label: "J", value: "J" },
  { label: "K", value: "K" },
  { label: "L", value: "L" },
  { label: "M", value: "M" },
  { label: "N", value: "N" },
  { label: "O", value: "O" },
  { label: "P", value: "P" },
  { label: "Q", value: "Q" },
  { label: "R", value: "R" },
  { label: "S", value: "S" },
  { label: "T", value: "T" },
  { label: "U", value: "U" },
  { label: "V", value: "V" },
  { label: "W", value: "W" },
  { label: "X", value: "X" },
  { label: "Y", value: "Y" },
  { label: "Z", value: "Z" },
];

const claritySelectOptions: SelectOption[] = [
  { label: "FL", value: "FL" },
  { label: "IF", value: "IF" },
  { label: "VVS1", value: "VVS1" },
  { label: "VVS2", value: "VVS2" },
  { label: "VS1", value: "VS1" },
  { label: "VS2", value: "VS2" },
  { label: "SI1", value: "SI1" },
  { label: "SI2", value: "SI2" },
  { label: "I1", value: "I1" },
  { label: "I2", value: "I2" },
  { label: "I3", value: "I3" },
];

const cutSelectOptions: SelectOption[] = [
  { label: "X", value: "X" },
  { label: "VG", value: "VG" },
  { label: "G", value: "G" },
  { label: "P", value: "P" },
  { label: "O1", value: "O1" },
  { label: "O2", value: "O2" },
];

const polishSelectOptions: SelectOption[] = [
  { label: "X", value: "X" },
  { label: "VG", value: "VG" },
  { label: "G", value: "G" },
  { label: "P", value: "P" },
];

const symmetrySelectOptions: SelectOption[] = [
  { label: "X", value: "X" },
  { label: "VG", value: "VG" },
  { label: "G", value: "G" },
  { label: "P", value: "P" },
];

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculate Price</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonText>
              <h5>Variables</h5>
            </IonText>
          </IonListHeader>
          <IonItem>
            <IonLabel position="floating">Colour</IonLabel>
            <IonSelect placeholder="Colour">
              {colourSelectOptions.map((selectOption) => (
                <IonSelectOption value={selectOption.value}>
                  {selectOption.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Clarity</IonLabel>
            <IonSelect placeholder="Clarity">
              {claritySelectOptions.map((selectOption) => (
                <IonSelectOption value={selectOption.value}>
                  {selectOption.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Cut</IonLabel>
            <IonSelect placeholder="Cut">
              {cutSelectOptions.map((selectOption) => (
                <IonSelectOption value={selectOption.value}>
                  {selectOption.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Cut</IonLabel>
            <IonSelect placeholder="Cut">
              {cutSelectOptions.map((selectOption) => (
                <IonSelectOption value={selectOption.value}>
                  {selectOption.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Polish</IonLabel>
            <IonSelect placeholder="Polish">
              {polishSelectOptions.map((selectOption) => (
                <IonSelectOption value={selectOption.value}>
                  {selectOption.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Symmetry</IonLabel>
            <IonSelect placeholder="Symmetry">
              {symmetrySelectOptions.map((selectOption) => (
                <IonSelectOption value={selectOption.value}>
                  {selectOption.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
