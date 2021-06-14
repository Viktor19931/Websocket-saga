import { FC, SyntheticEvent } from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { Field } from 'react-final-form';
import { Card } from '../../api/types';

import InfoMessage from '../InfoMessage';

import Wrapper, { Button, FormWrapper, FormGroup, Label } from './Wrapper';
import {
  displayName,
  optionalEmail,
  mustBeNumber,
  composeValidators,
  exactLength,
  required,
  maxLength,
  expiryDate,
} from '../../helpers/validation';
import { useHandleSubmit, useInfoMessage, useCardList } from './hooks';

type FormProps = {
  isPendingConfirmPayment: boolean;
  cardList?: Card[];
};

const renderForm =
  ({ isPendingConfirmPayment, cardList }: FormProps) =>
  ({ values, valid, handleSubmit }: FormRenderProps) =>
    (
      <Wrapper>
        <FormWrapper
          onSubmit={(e: SyntheticEvent) => {
            e.preventDefault();
            handleSubmit(values);
          }}
        >
          <FormGroup>
            <Label htmlFor='cardType'>Card Types:</Label>
            <Field
              id='cardType'
              type='select'
              name='cardType'
              component='select'
              validate={required}
            >
              <option value=''>Select card type</option>
              {cardList?.map(({ value }) => (
                <option {...{ value }}>{value}</option>
              ))}
            </Field>
          </FormGroup>
          <FormGroup>
            <Label htmlFor='cardNumber'>Card Number</Label>
            <Field
              type='text'
              id='cardNumber'
              name='cardNumber'
              component='input'
              validate={composeValidators(
                required,
                mustBeNumber,
                exactLength(values.cardType === 'Amex' ? 15 : 16)
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='expiry'>Expiry</Label>
            <Field
              id='expiry'
              type='text'
              name='expiry'
              component='input'
              placeholder='MM/YY'
              validate={composeValidators(required, expiryDate)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='displayName'>Name</Label>
            <Field
              id='displayName'
              type='text'
              name='displayName'
              component='input'
              validate={composeValidators(required, displayName, maxLength(50))}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='email'>Email</Label>
            <Field
              type='text'
              id='email'
              name='email'
              component='input'
              validate={optionalEmail}
            />
          </FormGroup>
          <Button type='submit' disabled={!valid || isPendingConfirmPayment}>
            {isPendingConfirmPayment ? 'Loading...' : 'Confirm Payment'}
          </Button>
        </FormWrapper>
      </Wrapper>
    );

const PaymentForm: FC = () => {
  const [
    isError,
    invoiceNumber,
    responseMessage,
    isPendingConfirmPayment,
    canShowConfirmMessage,
  ] = useInfoMessage();
  const handleSubmit = useHandleSubmit();
  const cardList = useCardList();

  if (canShowConfirmMessage)
    return (
      <InfoMessage
        {...{ isError, invoiceNumber }}
        description={responseMessage}
      />
    );

  return (
    <>
      {
        <Form
          render={renderForm({ isPendingConfirmPayment, cardList })}
          onSubmit={handleSubmit}
        />
      }
    </>
  );
};

export default PaymentForm;
