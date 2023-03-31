import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
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
import { AppContext } from "./contexts/AppContext";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import AppTabs from "./components/AppTabs";
import { AuthenticationContext } from "./contexts/AuthenticationContext";
import NotFoundPage from "./pages/NotFoundPage";
import { firebaseAuth } from "./firebase/firebase";

setupIonicReact();

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setLoggedIn(Boolean(user));
    });
  }, []);
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
      <AuthenticationContext.Provider value={{ loggedIn: loggedIn }}>
        <AppContext.Provider
          value={{
            price,
            discount,
            onEditPrice: editPriceHandler,
            onEditDiscount: editDiscountHandler,
          }}
        >
          <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route path="/authenticated">
                <AppTabs />
              </Route>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </AppContext.Provider>
      </AuthenticationContext.Provider>
    </IonApp>
  );
};

export default App;
