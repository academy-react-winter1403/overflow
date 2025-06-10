import React from "react";

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="flex items-center justify-between p-4 w-10/10 bg-gray-100 dark:bg-gray-500  max-xl:w-9/10 transition-all duration-300 max-sm:w-10/10 ">
      <img src={item.image} alt={item.name} className="w-16 h-16 rounded max-sm:hidden" />
      <div className="flex-1 ml-4 ">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-500 dark:text-white">{item.price} تومان</p>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 hover:text-red-700 font-bold border p-2 rounded-2xl"
      >
        حذف
      </button>
    </div>
  );
};

export default CartItem;