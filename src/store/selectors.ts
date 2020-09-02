import { ApplicationState } from "./types";

export const selectIsPendingConfirmPayment = ({
  confirmPayment,
}: ApplicationState) => confirmPayment.isPending;

export const selectConfirmPaymentData = ({
  confirmPayment,
}: ApplicationState) => confirmPayment.data;

export const selectConfirmPaymentError = ({
  confirmPayment,
}: ApplicationState) => confirmPayment.error;

export const selectCardList = ({ cardList }: ApplicationState) => cardList.cardTypes;
