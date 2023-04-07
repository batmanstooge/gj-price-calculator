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
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import { firestore } from "./firebase/firebase";

setupIonicReact();

const defaultDateISOString = new Date().toISOString();

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("user");
  const [cost, setCost] = useState<number>(100);
  const [costModifiedISOString, setCostModifiedISOString] =
    useState(defaultDateISOString);
  const [discount, setDiscount] = useState<number>(0.05);
  const [discountModifiedISOString, setDiscountModifiedISOString] =
    useState(defaultDateISOString);

  useEffect(() => {
    const getCostAndDiscount = async () => {
      const costDocumentRef = firestore.collection("costs").doc("cost");
      const costDocumentSnapshot = await costDocumentRef.get();
      if (costDocumentSnapshot) {
        const costDocumentData = costDocumentSnapshot.data();
        console.log("costDocumentData: ", costDocumentData);
        const documentDataCost = costDocumentData?.cost;
        const documentDataCostModifiedISOString = costDocumentData?.modified;
        console.log("documentDataCost", documentDataCost);
        setCost(documentDataCost);
        setCostModifiedISOString(documentDataCostModifiedISOString);
      }
      const discountDocumentRef = firestore
        .collection("discounts")
        .doc("discount");
      const discountDocumentSnapshot = await discountDocumentRef.get();
      if (discountDocumentSnapshot) {
        const documentData = discountDocumentSnapshot.data();
        const documentDataDiscount = documentData?.discount;
        const documentDataDiscountModifiedISOString = documentData?.modified;
        console.log("documentDataDiscount", documentDataDiscount);
        setDiscount(documentDataDiscount);
        setDiscountModifiedISOString(documentDataDiscountModifiedISOString);
      }
    };
    getCostAndDiscount();
  }, []);

  const editPriceHandler = (editedPrice: number) => {
    setCost(editedPrice);
  };
  const editDiscountHandler = (editedDiscount: number) => {
    setDiscount(editedDiscount);
  };
  const handleLogin = (role: string) => {
    setLoggedIn(true);
    setRole(role);
  };

  const handleSignout = () => {
    setLoggedIn(false);
  };

  const handleSignup = () => {
    setLoggedIn(true);
  };

  return (
    <IonApp>
      <AppContext.Provider
        value={{
          cost,
          costModifiedISOString,
          discount,
          discountModifiedISOString,
          onEditCost: editPriceHandler,
          onEditDiscount: editDiscountHandler,
        }}
      >
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/login">
              <LoginPage loggedIn={loggedIn} onLogin={handleLogin} />
            </Route>
            <Route exact path="/signup">
              <SignupPage onSignup={handleSignup} />
            </Route>
            <Route path="/authenticated">
              <AppTabs
                role={role}
                onSignout={handleSignout}
                loggedIn={loggedIn}
              />
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
    </IonApp>
  );
};

export default App;
