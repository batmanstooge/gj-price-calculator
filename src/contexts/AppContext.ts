import { createContext } from "react";

interface appDefaultValues {
  cost: number;
  costModifiedISOString: string;
  discount: number;
  discountModifiedISOString: string;
  onEditCost?: (cost: number) => void;
  onEditDiscount?: (discount: number) => void;
}

const defaultDateISOString = new Date().toISOString();

const defaultValue: appDefaultValues = {
  cost: 100,
  costModifiedISOString: defaultDateISOString,
  discount: 0.05,
  discountModifiedISOString: defaultDateISOString,
};
export const AppContext = createContext(defaultValue);
