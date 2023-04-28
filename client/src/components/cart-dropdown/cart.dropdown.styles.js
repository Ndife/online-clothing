import styled from "styled-components";
import CutomerButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;

  @media screen and (max-width: 800px){
    margin-right: 10px;
  }
`;

export const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartButton = styled(CutomerButton)`
  margin-top: auto;
`;

export const EmptyMesssageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
