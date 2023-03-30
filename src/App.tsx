import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import {
  calculator as calculatorIcon,
  settings as settingsIcon,
} from "ionicons/icons";
import { AppContext } from "./contexts/AppContext";
import { useState } from "react";
import PricePage from "./pages/PricePage";
import DiscountsPage from "./pages/DiscountsPage";

setupIonicReact();

const App: React.FC = () => {
  const [price, setPrice] = useState<number>(100);
  const [discount, setDiscount] = useState<number>(0.05);
  const editPriceHandler = (editedPrice: number) => {
    setPrice(editedPrice);
  };
  const editDiscountHandler = (editedDiscount: number) => {
    setDiscount(editedDiscount);
  };
  return (
    <IonApp>
      <AppContext.Provider
        value={{
          price,
          discount,
          onEditPrice: editPriceHandler,
          onEditDiscount: editDiscountHandler,
        }}
      >
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <HomePage />
              </Route>
              <Route exact path="/settings">
                <SettingsPage />
              </Route>
              <Route exact path="/settings/price">
                <PricePage />
              </Route>
              <Route exact path="/settings/discounts">
                <DiscountsPage />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={calculatorIcon} />
                <IonLabel>Calculate</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                <IonIcon icon={settingsIcon} />
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </AppContext.Provider>
    </IonApp>
  );
};

export default App;
