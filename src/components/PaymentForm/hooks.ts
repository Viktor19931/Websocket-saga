import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ConfirmPaymentParams } from "../../api/types";
import * as paymentActions from "../../store/actions";
import {
  selectIsPendingConfirmPayment,
  selectConfirmPaymentData,
  selectConfirmPaymentError,
  selectCardList,
} from "../../store/selectors";

type FormValues = { [key: string]: string };

export const useInfoMessage = () => {
  const [isConfirmedPayment, setConfirmedPayment] = useState(false);
  const isPendingConfirmPayment = useSelector(selectIsPendingConfirmPayment);
  const data = useSelector(selectConfirmPaymentData);
  const error = useSelector(selectConfirmPaymentError);

  const isError = !!error;
  const invoiceNumber = data?.invoiceNo;
  const responseMessage = data?.responseMessage || error?.message;
  const canShowConfirmMessage = isConfirmedPayment && !!responseMessage;

  useEffect(() => {
    if (!data && !error) return;

    setConfirmedPayment(true);
  }, [data, error]);

  return [
    isError,
    invoiceNumber,
    responseMessage!,
    isPendingConfirmPayment,
    canShowConfirmMessage,
  ] as const;
};

export const useHandleSubmit = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback((values: FormValues) => {
    dispatch(paymentActions.confirmPayment(values as ConfirmPaymentParams));
  }, []);

  return handleSubmit
};

export const useCardList = () => {
  const dispatch = useDispatch();
  const cardList = useSelector(selectCardList);

  useEffect(() => {
    dispatch(paymentActions.getCardList());
  }, []);

  return cardList;
};
