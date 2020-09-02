import { getType } from "typesafe-actions";
import { Reducer, combineReducers } from "redux";

import * as actions from "./actions";
import { PaymentActions, CardListState, ConfirmPaymentState } from "./types";
import { getAllowedCardTypes } from "./helpers";

const cardListInitialState = {
  isError: false,
  isPending: false,
};

const cardListReducer: Reducer<CardListState, PaymentActions> = (
  state = cardListInitialState,
  action
) => {
  switch (action.type) {
    case getType(actions.getCardListAsync.request):
      return {
        ...state,
        isError: false,
        isPending: true,
      };
    case getType(actions.getCardListAsync.success):
      return {
        ...state,
        cardTypes: getAllowedCardTypes(action.payload.cardTypes),
        isPending: false,
      };
    case getType(actions.getCardListAsync.failure):
      return {
        ...state,
        isError: true,
        isPending: false,
      };
    default:
      return state;
  }
};

const confirmPaymentInitialState = {
  isError: false,
  isPending: false,
};

const confirmPaymentReducer: Reducer<ConfirmPaymentState, PaymentActions> = (
  state = confirmPaymentInitialState,
  action
) => {
  switch (action.type) {
    case getType(actions.confirmPaymentAsync.request):
      return {
        ...state,
        isError: false,
        isPending: true,
      };
    case getType(actions.confirmPaymentAsync.success):
      return {
        ...state,
        data: action.payload,
        isPending: false,
      };
    case getType(actions.confirmPaymentAsync.failure):
      return {
        isError: true,
        isPending: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const paymentReducer = combineReducers({
  cardList: cardListReducer,
  confirmPayment: confirmPaymentReducer,
});

export default paymentReducer;
