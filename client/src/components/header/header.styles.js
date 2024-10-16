import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const OptionsContainerMobile = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    margin: 2%;
    height: 100%vh;
    display: flex;
    width: 100%;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 5;
  }
`;

export const OptionLink = styled(Link)`
  padding: 2% 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(211, 211, 211, 0.5); /* LightGray with 50% transparency */
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    align-items: center;
  }
`;