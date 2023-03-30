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
import { SetStateAction, useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { calculatePrice } from "../lib/calculator";
import {
  claritySelectOptions,
  colourSelectOptions,
  cutSelectOptions,
  polishSelectOptions,
  symmetrySelectOptions,
} from "../models/codelist.model";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [colour, setColour] = useState<string>("D");
  const [clarity, setClarity] = useState<string>("FL");
  const [cut, setCut] = useState<string>("X");
  const [polish, setPolish] = useState<string>("X");
  const [symmetry, setSymmetry] = useState<string>("X");
  const { price, discount } = useContext(AppContext);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState<number>(+price);

  useEffect(() => {
    setPriceAfterDiscount(+price);
  }, [price]);

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
      +price,
      discount
    );
    setPriceAfterDiscount(priceAfterDiscount);
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
              <h1>{priceAfterDiscount?.toFixed(2)}</h1>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
