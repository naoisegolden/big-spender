import React from "react";
import { Billionaire } from "../../store/items/types";

interface DisplayBillionairesProps {
  billionaires: Billionaire[];
  updateBillionaire(billionaire: Billionaire): void;
}

export const DisplayBillionaires: React.FC<DisplayBillionairesProps> = ({
  billionaires,
  updateBillionaire,
}) => {
  return <div>Hello</div>;
};
