import { Card } from "../api/types";

const allowedCardTypes = ["Visa", "MasterCard", "Amex"];

export const getAllowedCardTypes = (cardTypes: Card[]): Card[] =>
  cardTypes.filter(({ value }) => allowedCardTypes.includes(value));
