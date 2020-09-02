import styled from "styled-components";

import { media } from "../../styles/helpers";

const wrapperOnMobile = media.phone`
  padding: 20px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${wrapperOnMobile};
`;

export default Wrapper;
