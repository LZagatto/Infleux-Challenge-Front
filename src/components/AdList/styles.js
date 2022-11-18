import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1000px;
  width:55vw;
  gap: 10px;

  label {
    font-size: 15px;
    color: rgba(81,26,200,1);
  }

  select {
    border: none;
    color: #1e1e1e;
    background-color: #F7ECF8;
    border-radius: 5px;
    box-shadow: 2px 4px 0px 1px rgba(81,26,200,1);
    height: 35px;
    width: 50%;
    padding-left: 10px;
    margin: 15px;
  }
`;

export const AdListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  justify-self: center;
  max-width: 1000px;
  flex-wrap: wrap;
  gap: 10px;
`;