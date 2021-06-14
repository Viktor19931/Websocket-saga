import { FC } from 'react';
import ProductInfo from '../../components/ProductInfo';
import PaymentForm from '../../components/PaymentForm';
import Wrapper from './Wrapper';

const Payment: FC = () => (
  <Wrapper>
    <ProductInfo />
    <PaymentForm />
  </Wrapper>
);

export default Payment;
