import { createContext } from "react";

interface appDefaultValues {
  price: number;
  discount: number;
}

const defaultValue: appDefaultValues = { price: 100, discount: 0.05 };
export const AppContext = createContext(defaultValue);
