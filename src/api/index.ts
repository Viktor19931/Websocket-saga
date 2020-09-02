import axios from "axios";

import {
  CardListResponse,
  ConfirmPaymentResponse,
  ConfirmPaymentParams,
} from "./types";

export const getCardList = () =>
  axios
    .get<CardListResponse>("http://www.mocky.io/v2/5d145fa22f0000ff3ec4f030")
    .then((response) => response.data);

// fail request http://www.mocky.io/v2/5d8de441310000a2612b517c 

export const confirmPayment = (params: ConfirmPaymentParams) =>
  axios
    .post<ConfirmPaymentResponse>(
      "http://www.mocky.io/v2/5d8de422310000b19d2b517a",
      { params }
    )
    .then((response) => response.data);
