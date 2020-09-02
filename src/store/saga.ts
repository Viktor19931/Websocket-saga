import { take, all, call } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import * as api from "../api";
import asyncEntyty from "../helpers/asyncEntyty";
// import { ConfirmPaymentParams } from "./../api/types";

import * as paymentActions from "./actions";

const fetchCardListAsync = asyncEntyty(paymentActions.getCardListAsync, () =>
  api.getCardList()
);

const confirmPaymentAsync = asyncEntyty(
  paymentActions.confirmPaymentAsync,
  (params: any) => api.confirmPayment(params)
);

function* watchFetchCardList() {
  while (true) {
    yield take(getType(paymentActions.getCardList));

    yield call(fetchCardListAsync);
  }
}

function* watchConfirmPayment() {
  while (true) {
    const {
      payload,
    }: ReturnType<typeof paymentActions.confirmPayment> = yield take(
      getType(paymentActions.confirmPayment)
    );

    yield call(confirmPaymentAsync, payload);
  }
}

export default function* rootSaga() {
  yield all([watchFetchCardList(), watchConfirmPayment()]);
}
