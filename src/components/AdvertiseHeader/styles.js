import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding: 10px;
  height: 60px;
  width: 850px;
  border-radius:20px 20px 0 0px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.08); */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2{
    color: #1e1e1e;
    font-size: 17px;
    text-align: left;
    width: 150px;
    font-weight: bold;
    padding-left: 15px;
  }

  span{
    margin-left: 5px;
    width: 160px;
    font-weight: 800;
    color:#1e1e1e;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

svg{
  height: 20px;
  width: 20px;
  color: #1e1e1e;
}
&:hover {
      opacity: 0.5;
    }
`;
