import React from "react";
import CartGrid from "../Components/CartGrid";
import { useCart } from "../CartContext";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="min-h-screen flex items-center justify-center">
      {cart.length > 0 ? (
        <div>
          <CartGrid />
          <div className="flex justify-center p-10">
            <button className="btn btn-wide bg-primary">
              Proceed to Buy
              <ShoppingCartIcon className="ml-2" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl">Your Cart is Empty </h2>
            <RemoveShoppingCartIcon fontSize="large" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
