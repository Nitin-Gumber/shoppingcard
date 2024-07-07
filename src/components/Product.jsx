import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

function Product({ post }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex flex-col items-center justify-between border rounded-lg gap-3 p-4 mt-10 ml-5">
      <h2 className="text-gray-700 font-semibold text-lg text-left truncate w-48 mt-1">
        {post.title}
      </h2>
      <p className="w-48 text-gray-400 font-normal text-[15px] text-left">
        {post.description.split(" ").slice(0, 10).join(" ") + "..."}
      </p>
      <div className="h-[180px]">
        <img src={post.image} alt={post.title} className="w-full h-full" />
      </div>
      <div className="flex justify-between items-center gap-x-12 mt-5">
        <div>
          <p className="text-green-600 font-semibold items-center w-full">
            ${post.price}
          </p>
        </div>

        {cart.some((item) => item.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase text-nowrap hover:bg-gray-700 hover:text-white transition "
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase text-nowrap hover:bg-gray-700 hover:text-white transition "
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
