export type CardType = "Visa" | "MasterCard" | "JSB" | "Amex";

export type Card = {
  id: number;
  value: CardType;
};

export type CardListResponse = {
  cardTypes: Card[];
};

export type ConfirmPaymentParams = {
  expiry: string;
  cardType: CardType;
  cardNumber: string;
  displayName: string;
  email?: string;
};

export type ConfirmPaymentResponse = {
  approvalCode: string;
  invoiceNo: string;
  responseCode: number;
  responseMessage: string;
};

export type ApiError = {
  name: string;
  message: string;
}
