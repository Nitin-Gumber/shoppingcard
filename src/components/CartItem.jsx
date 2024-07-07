import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
    toast.error("Removed Item");
  };

  return (
    <div className="flex items-center p-2 justify-between mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover" src={item.image} alt={item.title} />
        </div>
        <div>
          <div className="md:ml-10 self-start sapce-y-5 w-[100%] md:w-[70%]">
            <h1 className="text-xl text-slate-700 font-bold">{item.title}</h1>
            <p className="text-base text-slate-700 font-medium mt-2">
              {item.description.split(" ").slice(0, 25).join(" ") + "..."}
            </p>
            <div className="flex item-center justify-between">
              <p className="text-bold text-lg text-green-600">${item.price}</p>
              <button
                className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                onClick={() => removeFromCart(item.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
          <div className="h-[1.5px] w-full bg-gray-800 mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
