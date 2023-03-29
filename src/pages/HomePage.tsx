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
import { SetStateAction, useState } from "react";
import { Calculator } from "../components/calculator.component";
import { Results } from "../components/results.component";
import { calculatePrice } from "../lib/calculator";
import {
  claritySelectOptions,
  colourSelectOptions,
  cutSelectOptions,
  polishSelectOptions,
  symmetrySelectOptions,
} from "../models/codelist.model";
import "./HomePage.css";

const colourValueIntegerMapper = (colour: string): number => {
  switch (colour) {
    case "D":
      return 0;
    case "E":
      return 1;
    case "F":
      return 2;
    case "G":
      return 3;
    case "H":
      return 4;
    case "I":
      return 5;
    case "J":
      return 6;
    case "K":
      return 7;
    case "L":
      return 8;
    case "M":
      return 9;
    case "N":
      return 10;
    case "O":
      return 11;
    case "P":
      return 12;
    case "Q":
      return 13;
    case "R":
      return 14;
    case "S":
      return 15;
    case "T":
      return 16;
    case "U":
      return 17;
    case "V":
      return 18;
    case "W":
      return 19;
    case "X":
      return 20;
    case "Y":
      return 21;
    case "Z":
      return 22;
  }
  return -1;
};

const clarityValueIntegerMapper = (clarity: string): number => {
  switch (clarity) {
    case "FL":
      return 0;
    case "IF":
      return 1;
    case "VVS1":
      return 2;
    case "VVS2":
      return 3;
    case "VS1":
      return 4;
    case "VS2":
      return 5;
    case "SI1":
      return 6;
    case "SI2":
      return 7;
    case "I1":
      return 8;
    case "I2":
      return 9;
    case "I3":
      return 10;
  }
  return -1;
};

const cutValueIntegerMapper = (cut: string): number => {
  switch (cut) {
    case "X":
      return 0;
    case "VG":
      return 1;
    case "G":
      return 2;
    case "P":
      return 3;
    case "O1":
      return 4;
    case "O2":
      return 5;
  }
  return -1;
};

const polishValueIntegerMapper = (polish: string): number => {
  switch (polish) {
    case "X":
      return 0;
    case "VG":
      return 1;
    case "G":
      return 2;
    case "P":
      return 3;
  }
  return -1;
};

const symmetryValueIntegerMapper = (symmetry: string): number => {
  switch (symmetry) {
    case "X":
      return 0;
    case "VG":
      return 1;
    case "G":
      return 2;
    case "P":
      return 3;
  }
  return -1;
};

const HomePage: React.FC = () => {
  const [colour, setColour] = useState<string>("D");
  const [clarity, setClarity] = useState<string>("FL");
  const [cut, setCut] = useState<string>("X");
  const [polish, setPolish] = useState<string>("X");
  const [symmetry, setSymmetry] = useState<string>("X");
  const [price, setPrice] = useState<number>(100);

  const formattedVariablesForCalculation = () => {
    return `${colour}-${clarity}-${cut}-${polish}-${symmetry}`;
  };
  const colourVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setColour(event.detail.value);
  };

  const clarityVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setClarity(event.detail.value);
  };

  const cutVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setCut(event.detail.value);
  };

  const polishVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setPolish(event.detail.value);
  };

  const symmetryVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setSymmetry(event.detail.value);
  };

  const calculatePriceHandler = () => {
    const priceAfterDiscount = calculatePrice(
      colour,
      clarity,
      cut,
      polish,
      symmetry,
      100,
      0.05
    );
    setPrice(priceAfterDiscount);
  };

  const getPriceAfterDiscount = (
    price: number,
    discount: number,
    variableNumber: number
  ) => {
    let priceAfterDiscount = price;
    for (let i = 0; i < variableNumber; i++) {
      priceAfterDiscount = getPriceAfterSingleDiscount(
        priceAfterDiscount,
        discount
      );
    }
    return priceAfterDiscount;
  };

  const getPriceAfterSingleDiscount = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

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
                <IonSelect
                  placeholder="Colour"
                  value={colour}
                  onIonChange={colourVariableChanged}
                >
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
                <IonSelect
                  placeholder="Clarity"
                  value={clarity}
                  onIonChange={clarityVariableChanged}
                >
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
                <IonSelect
                  placeholder="Cut"
                  value={cut}
                  onIonChange={cutVariableChanged}
                >
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
                <IonSelect
                  placeholder="Polish"
                  value={polish}
                  onIonChange={polishVariableChanged}
                >
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
                <IonSelect
                  placeholder="Symmetry"
                  value={symmetry}
                  onIonChange={symmetryVariableChanged}
                >
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
            <IonButton expand="block" onClick={calculatePriceHandler}>
              Calculate
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Result For</IonCardTitle>
            <IonCardSubtitle>
              {formattedVariablesForCalculation()}
            </IonCardSubtitle>
            <IonCardSubtitle>
              Price last modified on 12-May-2022
            </IonCardSubtitle>
            <IonCardSubtitle>
              Discount last modified on 12-May-2022
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <h1>{price.toFixed(2)}</h1>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
