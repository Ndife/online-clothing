import React from 'react';
import { CartItemContainer, CartItemImage, ItemDetailsContainer, NameCnotainer, PriceContainer } from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <NameCnotainer>{name}</NameCnotainer>
            <PriceContainer>
            {quantity} X ${price}
            </PriceContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default React.memo(CartItem);