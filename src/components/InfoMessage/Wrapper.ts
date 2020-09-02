import styled from "styled-components";

type DescriptionProps = {
  isError: boolean;
};

export const Description = styled.p<DescriptionProps>`
  color: ${({ isError }) => (isError ? "red" : "blue")};
`;

export const InvoiceNumber = styled.p``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
