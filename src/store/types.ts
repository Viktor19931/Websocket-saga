import { Card, ConfirmPaymentResponse, ApiError } from "./../api/types";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type PaymentActions = ActionType<typeof actions>;

type CommonState = {
  isError: boolean;
  isPending: boolean;
};

export type CardListState = CommonState & {
  cardTypes?: Card[];
};

export type ConfirmPaymentState = CommonState & {
  data?: ConfirmPaymentResponse;
  error?: ApiError;
};

export type ApplicationState = {
  cardList: CardListState;
  confirmPayment: ConfirmPaymentState;
};
