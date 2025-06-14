const CartItem = ({ item, removeItem }) => {
  return (
    <div className="flex w-10/10 items-center justify-between bg-gray-100 p-4 transition-all duration-300 max-xl:w-9/10 max-sm:w-10/10 dark:bg-gray-500">
      <img
        src={item.paymentInvoiceImage}
        alt={item.title}
        className="h-16 w-16 rounded max-sm:hidden"
      />
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-500 dark:text-white">{item.paid} تومان</p>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="rounded-2xl border p-2 font-bold text-red-500 hover:text-red-700"
      >
        حذف
      </button>
    </div>
  );
};

export default CartItem;
