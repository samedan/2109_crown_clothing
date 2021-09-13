import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
    <div className="cart-items">
      <CustomButton>GOT TO CHECKOUT</CustomButton>
    </div>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
