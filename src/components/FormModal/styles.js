import styled from "styled-components";

import {IoClose, IoPaperPlaneOutline} from 'react-icons/io5';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  background-color: #FBF6FB;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 500px;
  padding: 32px 48px;
  box-shadow: 10px 13px 0px 0px rgba(81,26,200,1);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 0;
  margin-bottom: 10px;
  font-size: 25px;

  color: #1e1e1e;
  background-color: transparent;

  & button {
    max-height: 27px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;
export const FormContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
export const FormMain = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  label {
    font-size: 18px;
  }

  input {
    border: none;
    color: #1e1e1e;
    background-color: #F7ECF8;
    border-radius: 5px;
    box-shadow: 2px 4px 0px 1px rgba(81,26,200,1);
    height: 30px;
    width: 100%;
    padding-left: 10px;
  }

  select {
    border: none;
    color: #1e1e1e;
    background-color: #F7ECF8;
    border-radius: 5px;
    box-shadow: 2px 4px 0px 1px rgba(81,26,200,1);
    height: 35px;
    width: 100%;
    padding-left: 10px;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;

  button {
    align-self: center;
    background: #b4ecb4;
    border: none;
    border-radius: 6px;
    width: 110px;
    height: 55px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5s;
    }
  }
`;
export const CloseIcon = styled(IoClose)`
  width: 28px;
  height: 28px;
`;
export const CheckIcon = styled(IoPaperPlaneOutline)`
  color: white;
  width: 1.8em;
  height: 1.8em;
`;

