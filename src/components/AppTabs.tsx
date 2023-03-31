import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import {
  calculator as calculatorIcon,
  settings as settingsIcon,
} from "ionicons/icons";
import PricePage from "../pages/PricePage";
import DiscountsPage from "../pages/DiscountsPage";
import { useAuthentication } from "../contexts/AuthenticationContext";

const AppTabs: React.FC = () => {
  const { loggedIn } = useAuthentication();
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/authenticated/home">
          <HomePage />
        </Route>
        <Route exact path="/authenticated/settings">
          <SettingsPage />
        </Route>
        <Route exact path="/authenticated/settings/price">
          <PricePage />
        </Route>
        <Route exact path="/authenticated/settings/discounts">
          <DiscountsPage />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/authenticated/home">
          <IonIcon icon={calculatorIcon} />
          <IonLabel>Calculate</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/authenticated/settings">
          <IonIcon icon={settingsIcon} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
