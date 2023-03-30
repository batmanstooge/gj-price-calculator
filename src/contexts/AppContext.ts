import { createContext } from "react";

interface appDefaultValues {
  price: number;
  discount: number;
  onEditPrice?: (price: number) => void;
  onEditDiscount?: (discount: number) => void;
}

const defaultValue: appDefaultValues = { price: 100, discount: 0.05 };
export const AppContext = createContext(defaultValue);
