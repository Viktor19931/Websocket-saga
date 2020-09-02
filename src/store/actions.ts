import {
  CardListResponse,
  ConfirmPaymentResponse,
  ApiError,
  ConfirmPaymentParams,
} from "./../api/types";
import { createAction, createAsyncAction } from "typesafe-actions";

export const getCardList = createAction("GET_CARD_LIST")();

export const getCardListAsync = createAsyncAction(
  "GET_CARD_LIST_REQUEST",
  "GET_CARD_LIST_SUCCESS",
  "GET_CARD_LIST_FAILURE"
)<void, CardListResponse, void>();

export const confirmPayment = createAction("CONFIRM_PAYMENT")<
  ConfirmPaymentParams
>();

export const confirmPaymentAsync = createAsyncAction(
  "CONFIRM_PAYMENT_REQUEST",
  "CONFIRM_PAYMENT_SUCCESS",
  "CONFIRM_PAYMENT_FAILURE"
)<void, ConfirmPaymentResponse, ApiError>();
