import styled from "styled-components";

import { media } from "../../styles/helpers";

export const Label = styled.label`
  font-size: 16px;
  min-width: 130px;
`;

export const Button = styled.button`
  min-height: 40px;
  margin-left: 130px;
`;

export const FormGroup = styled.div`
  display: flex;
  max-width: 50%;
  margin-bottom: 20px;
  input,
  select {
    padding: 5px;
    min-height: 30px;
    min-width: 250px;
    box-sizing: border-box;
  }
  & input[name="expiry"] {
    min-width: unset;
    max-width: 57px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const formWrapperOnMobile = media.phone`
  ${FormWrapper} {
    min-width: 100%;
  }
  ${FormGroup} {
    max-width: 100%;
    flex-direction: column;
  }
  ${Label} {
    margin: 10px 0;
  }
  ${Button} {
    margin: 0;
  }
  input,
  select {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  ${formWrapperOnMobile};
`;

export default Wrapper;
