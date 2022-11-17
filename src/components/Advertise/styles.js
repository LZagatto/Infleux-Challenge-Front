import styled from "styled-components";

import {IoTrashBin, IoPencil} from 'react-icons/io5';


export const Container = styled.div`
  background: #ffffff;
  padding: 10px;
  height: 60px;
  width: 850px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2{
    color: #1e1e1e;
    font-size: 1rem;
    text-align: left;
    width: 150px;
  }

  span{
    border-left: 3px solid #bbbbbb;
    padding-left: 10px;
    width: 120px;

    color: #999999;
    font-style: italic;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 0.2s ease-out;

   
  }
`;

export const ButtonArea = styled.div`
 width: 10%;
 display: flex;
 justify-content: space-between;

`;

export const Button = styled.button`
 border: none;
 background-color: transparent;
 cursor: pointer;

 transition: opacity 0.2s ease-out;


&:hover {
      opacity: 0.5;
    }
`;

export const EditIcon = styled(IoPencil)`
  width: 28px;
  height: 28px;
  color: #EFD30C;
`;
export const DeleteIcon = styled(IoTrashBin)`
  color: #DA0808;
  width: 1.8em;
  height: 1.8em;
`;
