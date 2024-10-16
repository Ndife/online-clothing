import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/card.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/hamburger.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionsContainerMobile,
  OptionLink,
  MobileMenuIcon,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  const closeDropdown = () => setIsDropdownOpen(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <MobileMenuIcon>
        <CartIcon />
        <HamburgerIcon onClick={toggleDropdown} />
      </MobileMenuIcon>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>

      {isDropdownOpen && (
        <OptionsContainerMobile ref={dropdownRef}>
          <OptionLink to="/shop" onClick={closeDropdown}>SHOP</OptionLink>
          <OptionLink to="/contact" onClick={closeDropdown}>CONTACT</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={() => {
              signOutStart();
              closeDropdown();
            }}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin" onClick={closeDropdown}>SIGN IN</OptionLink>
          )}
        </OptionsContainerMobile>
      )}

      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
