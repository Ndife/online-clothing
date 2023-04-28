import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/card.selector";
import { CartIconContainer, ShoppingIconStyles, ItemCountContainer } from './cart-icon.styles'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer>
    <ShoppingIconStyles onClick={toggleCartHidden} />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
