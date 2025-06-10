import React, { useEffect, useState } from "react";
import CartItem from "../Basket/CartItem";
import payment from "../../assets/basket/payment-removebg-preview.png";
import { Getpaymentdetail } from "../../core/services/api/payment/getpaymentdetail";
const Basket = () => {
  const [cart, setCart] = useState([]);

  const Getpayment = async () =>{

    const respone = await Getpaymentdetail();

    setCart(respone);
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
// Getpayment()
  }, [])
  

  return (
    <>
      <h1 className="font-iransans mb-4 text-2xl font-bold">سبد خرید</h1>
      <div className="mx-auto mt-10 flex w-9/10 flex-row-reverse gap-5 rounded-lg bg-white p-6 shadow-lg max-sm:flex-col dark:bg-gray-600">
        <div className="flex h-100 w-3/10 flex-col items-center gap-5 rounded-2xl transition-all duration-300 max-sm:h-auto max-sm:w-10/10">
          <div className="flex h-100 w-7/10 flex-col rounded-2xl bg-gray-100 transition-all duration-300 max-xl:w-10/10 max-lg:h-auto dark:bg-gray-500">
            <div className="bg-deep-blue mt-3 flex h-30 w-10/10 scale-90 flex-row flex-wrap rounded-2xl max-lg:h-25 max-lg:scale-80">
              <p className="font-iransans w-10/10 pt-5 pr-5 text-right font-bold text-white">
                {" "}
                جمع کل:{" "}
              </p>
              <span className="font-iransans w-10/10 text-2xl text-white max-lg:text-xl">
                تومان 
              </span>
            </div>
            <div className="font-iransans flex scale-90 flex-col gap-5 border-b text-right font-bold">
              <p className="text-xl max-lg:text-sm">اطلاعات:</p>
              <div className="flex flex-row-reverse gap-10 pr-5 text-2xl max-lg:text-xl">
                <span> تعداد آیتم ها </span>
                <p>{cart.length}</p>
              </div>
            </div>{" "}
            <div className="font-iransans flex scale-90 flex-col gap-5 border-b text-right font-bold">
              <p className="text-xl max-lg:text-sm">پرداخت امن:</p>
              <img className="scale-90" src={payment} />
            </div>
            <button className="bg-deep-blue h-20 scale-90 rounded-2xl text-2xl font-bold text-white transition-all duration-300 hover:scale-85 hover:bg-blue-800 max-lg:scale-75 max-lg:text-xl">
              اقدام به پرداخت
            </button>
          </div>
        </div>
        <div className="flex h-150 w-7/10 flex-col gap-5 overflow-auto rounded-2xl max-sm:w-10/10">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem key={item.id} item={item} removeItem={removeItem} />
            ))
          ) : (
            <p className="font-iransans m-auto text-2xl font-bold text-gray-500">
              سبد خرید شما خالی است.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export { Basket };
