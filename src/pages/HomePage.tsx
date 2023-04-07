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

  useEffect(() => {
    setPrice(+cost);
  }, [cost]);

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
            <IonCardTitle>
              Price for {formattedVariablesForCalculation()}
              <IonCardSubtitle>
                <IonGrid>
                  <IonRow class="ion-align-items-center">
                    <IonCol>Cost</IonCol>
                    <IonCol>
                      <IonGrid>
                        <IonRow>
                          <IonCol>
                            <IonText>{cost}</IonText>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol>
                            <IonText>{costModifiedISOString}</IonText>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonCol>
                  </IonRow>
                  <IonRow class="ion-align-items-center">
                    <IonCol>Discount</IonCol>
                    <IonCol>
                      <IonGrid>
                        <IonRow>
                          <IonCol>
                            <IonText>{discount}</IonText>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol>
                            <IonText>{discountModifiedISOString}</IonText>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardSubtitle>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <h1>{price?.toFixed(2)}</h1>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
