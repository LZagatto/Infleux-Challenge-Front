import styled from "styled-components";

import { IoAdd } from "react-icons/io5";

export const AddAdvertiseButton = styled.button`
  border: 5px outset #FFFFFF;
  background-color: rgba(0, 0, 0, 0.04);
  margin: 10px;
  padding: 10px;
  height: 50px;
  width: 150px;
  cursor: pointer;

  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.2s ease-out;

`;

export const AddIcon = styled(IoAdd)`
  stroke: #ffffff;
  width: 64px;
  height: 64px;
`;
