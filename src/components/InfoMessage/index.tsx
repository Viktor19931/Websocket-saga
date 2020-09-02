import React, { FC } from "react";

import { Wrapper, Description, InvoiceNumber } from "./Wrapper";

type InfoMessageProps = {
  isError: boolean;
  description: string;
  invoiceNumber?: string;
};

const InfoMessage: FC<InfoMessageProps> = ({
  description,
  invoiceNumber,
  ...rest
}) => {
  return (
    <Wrapper>
      <Description {...rest}>{description}</Description>
      {invoiceNumber && (
        <InvoiceNumber>Invoice number: {invoiceNumber}</InvoiceNumber>
      )}
    </Wrapper>
  );
};

export default InfoMessage;
