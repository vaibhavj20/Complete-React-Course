import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    // <div className="text-center m-10 p-10 font-Poppins">
    //   <h1 className="text-2xl font-bold text-Dark-Brown">Cart</h1>
    //   <div className="w-6/12 m-auto">
    //     <button
    //       className="p-2 m-2 bg-black text-white rounded-lg"
    //       onClick={handleClearCart}
    //     >
    //       Clear Cart
    //     </button>
    //     {cartItems.length === 0 && (
    //       <h1 className="font-medium p-5 m-5 border border-x-gray-200 shadow shadow-gray-300 rounded-md hover:shadow-md">
    //         Cart is empty,Add items to the cart!
    //       </h1>
    //     )}
    //     <ItemList items={cartItems} />
    //   </div>
    // </div>
    <div className="text-center m-6 p-6 font-Poppins bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-Dark-Brown mb-6">Cart</h1>
      <div className="w-6/12 m-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-Medium-Brown">
            Your Cart Items
          </span>
          <button
            className="px-4 py-2 bg-Medium-Brown text-white rounded-lg hover:bg-Dark-Brown transition duration-300"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <h1 className="font-medium p-5 m-5 border border-gray-200 shadow shadow-gray-300 rounded-md hover:shadow-md">
            Cart is empty, add items to the cart!
          </h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
