import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonRow,
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
  const { cost, costModifiedISOString, discount, discountModifiedISOString } =
    useContext(AppContext);
  const [price, setPrice] = useState<number>(+cost);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isVariablesChanged, setIsVariablesChanged] = useState(false);

  useEffect(() => {
    setPrice(+cost);
  }, [cost]);

  const formattedVariablesForCalculation = () => {
    return `${colour}-${clarity}-${cut}-${polish}-${symmetry}`;
  };
  const colourVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setIsVariablesChanged(true);
    setColour(event.detail.value);
  };

  const clarityVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setIsVariablesChanged(true);
    setClarity(event.detail.value);
  };

  const cutVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setIsVariablesChanged(true);
    setCut(event.detail.value);
  };

  const polishVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setIsVariablesChanged(true);
    setPolish(event.detail.value);
  };

  const symmetryVariableChanged = (event: {
    detail: { value: SetStateAction<string> };
  }) => {
    setIsVariablesChanged(true);
    setSymmetry(event.detail.value);
  };

  const calculatePriceHandler = () => {
    setIsCalculating(true);
    const calculatedPrice = calculatePrice(
      colour,
      clarity,
      cut,
      polish,
      symmetry,
      +cost,
      discount
    );
    setPrice(calculatedPrice);
    setIsCalculating(false);
    setIsVariablesChanged(false);
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
        <IonCard color="light">
          <IonLoading isOpen={isCalculating} />
          <IonCardHeader>
            <IonCardTitle>
              Price for {formattedVariablesForCalculation()}
              <IonCardSubtitle>
                <IonGrid>
                  <IonRow>
                    <IonCol size="4">
                      <IonText>Cost</IonText>
                    </IonCol>
                    <IonCol>
                      <IonText>Last Modified</IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="4">
                      <IonText>{cost}</IonText>
                    </IonCol>
                    <IonCol>
                      <IonText>{costModifiedISOString}</IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="4">
                      <IonText>Discount</IonText>
                    </IonCol>
                    <IonCol>
                      <IonText>Last Modified</IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="4">
                      <IonText>{discount}</IonText>
                    </IonCol>
                    <IonCol>
                      <IonText>{discountModifiedISOString}</IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardSubtitle>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {isVariablesChanged ? (
              <IonText color="warning" class="ion-text-center">
                <h1>Recalculate with new variables</h1>
              </IonText>
            ) : (
              <IonText color="success" class="ion-text-center">
                <h1>{price?.toFixed(2)}</h1>
              </IonText>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
