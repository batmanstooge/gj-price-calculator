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

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("user");
  const [price, setPrice] = useState<number>(100);
  const [discount, setDiscount] = useState<number>(0.05);

  useEffect(() => {
    const getPriceAndDiscount = async () => {
      const priceDocumentRef = firestore.collection("price").doc("price");
      const priceDocumentSnapshot = await priceDocumentRef.get();
      if (priceDocumentSnapshot) {
        const priceDocumentData = priceDocumentSnapshot.data();
        const documentDataPrice = priceDocumentData?.price;
        console.log("documentDataPrice", documentDataPrice);
        setPrice(documentDataPrice);
      }
      const discountDocumentRef = firestore
        .collection("discount")
        .doc("discount");
      const discountDocumentSnapshot = await discountDocumentRef.get();
      if (discountDocumentSnapshot) {
        const documentData = discountDocumentSnapshot.data();
        const documentDataDiscount = documentData?.discount;
        console.log("documentDataDiscount", documentDataDiscount);
        setDiscount(documentDataDiscount);
      }
    };
    getPriceAndDiscount();
  }, []);

  const editPriceHandler = (editedPrice: number) => {
    setPrice(editedPrice);
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
          price,
          discount,
          onEditPrice: editPriceHandler,
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
