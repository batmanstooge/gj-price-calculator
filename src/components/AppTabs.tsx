import { Route } from "react-router-dom";
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
import CostPage from "../pages/CostPage";
import DiscountsPage from "../pages/DiscountsPage";

interface AppTabsProps {
  role: string;
  onSignout: () => void;
  loggedIn: boolean;
}

const AppTabs: React.FC<AppTabsProps> = ({ role, onSignout, loggedIn }) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/authenticated/home">
          <HomePage />
        </Route>
        <Route exact path="/authenticated/settings">
          <SettingsPage role={role} onSignout={onSignout} loggedIn={loggedIn} />
        </Route>
        <Route exact path="/authenticated/settings/cost">
          <CostPage />
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
