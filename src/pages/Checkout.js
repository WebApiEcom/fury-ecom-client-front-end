import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setCartTotal, setOrderStatus } from "../redux/cartSlice";
import CheckoutItem from "../components/CheckoutComponents/CheckoutItem";
import SignUp from "./CreateUser";

import axios from "axios";
import { useHistory } from "react-router-dom";
import Payment from "./Payment";

function Checkout() {
  // LOCAL STATES
  const { shoppingCart, orderTotal } = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [addressNo, setAddressNo] = useState("");
  const [lane, setLane] = useState("");
  const [city, setCity] = useState("");

  // OBJECTS FOR LOCAL USAGE
  let history = useHistory();
  const dispatch = useDispatch();

  // USER TOKEN
  const { token } = useSelector((state) => state.userX);

  // VERIFY REDUX STORED USER TOKEN IS VALID OR NOT
  const checkUserTokenIsValid = async () => {
    await axios
      .get(`http://localhost:4000/fury/users/verify/${token}`)
      .then((res) => {
        console.log("check", res.data);
        setName(res.data ? res.data.name : null);
        setPhoneNo(res.data ? res.data.phone_number : null);
        setAddressNo(
          res.data && res.data.address ? res.data.address.address_No : null
        );
        setLane(res.data && res.data.address ? res.data.address.lane : null);
        setCity(res.data && res.data.address ? res.data.address.city : null);
      });
  };

  // INITIAL API CALLS
  useEffect(() => {
    checkUserTokenIsValid();
  }, []);

  // FUNCTION FOR PLACE ORDER
  const placeOrder = () => {
    axios
      .post(
        "http://localhost:4000/orders/",
        {
          total: orderTotal,
          items: shoppingCart,
          payment_type: "Debit Card",
        },
        {
          headers: {
            "x-authToken": `${token}`,
            // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InpzaHRtYWRAZ21haWwuY29tIiwiaWF0IjoxNjI5ODA0ODE4fQ.Xc7vLZ6giavNqROPjDhGucyl11O9E2HSSw4nUW6Sruk",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(setOrderStatus(true));
          dispatch(setCart([]));
          dispatch(setCartTotal(0));
          history.push("/");
        }
      });
  };

  return (
    <div>
      <div className="block">
        <div className="w-300 my-0 mx-auto">
          <div className="flex mb-7 -mx-2 mt-4">
            <div className="flex-grow-0 flex-shrink-0 w-8/12 mb-7 mx-2 px-2">
              <div className="mb-2.5 py-5 px-7 bg-white rounded-t-lg rounded-b-lg">
                <div className="relative">
                  <p class="text-lg text-black font-bold mb-6 mt-2">
                    Shipping Information
                  </p>
                  <div className="relative ">
                    <div className="w-4/5 inline-grid overflow-hidden">
                      <div className="font-bold mb-0375 break-all">
                        {name}, +94 {phoneNo}
                      </div>
                      <div className="leading-cus2">
                        {addressNo} {lane}, {city}
                      </div>
                      <div className="leading-cus2"></div>
                      <div className="leading-cus2"></div>
                    </div>
                  </div>
                  <div className="hidden"></div>
                  <div className="absolute right-0 bottom-2.5 flex flex-col items-end mt-4 pl-cus2 ">
                    <button className="rounded-none p-0 h-5 border-0 text-cus text-xs">
                      + Add new address
                    </button>
                    <button className="rounded-none p-0 h-5 border-0 text-cus mb-0 text-xs">
                      Select other addresses
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-2.5 py-5 px-7 bg-white rounded-t-lg rounded-b-lg">
                <div className="w-full relative">
                  <div className="w-full text-lg text-black font-bold pt-0 px-0 pb-3">
                    Payment Methods
                  </div>
                  <div className="flex justify-between px-0 pt-3 pb-cus">
                    <div className="flex flex-grow flex-shrink">
                      <span className="font-sans text-sm tracking-normal h-6 text-cus leading-6 cursor-pointer">
                        + Select payment method
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2.5 py-5 px-7 bg-white rounded-t-lg rounded-b-lg">
                <div class="relative">
                  <p class="text-lg text-black font-bold mb-6 mt-2">
                    Order Review
                  </p>
                  {shoppingCart.map((item) => (
                    <div key={item.item_id}>
                      <CheckoutItem catItem={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-30 max-w-30 px-2 relative">
              <div className="relative left-0 right-0">
                <div className="mb-2.5 px-7 py-5 bg-white rounded-t-lg rounded-b-xl">
                  <div className="relative inline-block w-full">
                    <div class="relative">
                      <p className="mb-6 text-h2t font-bold">Order Summary</p>
                      <div className="border border-solid border-gray-100 my-5 pt-4 text-black">
                        <dl className="flex flex-wrap items-center text-sm m-0">
                          <dt className="flex-grow flex-shrink text-sm font-bold">
                            Total
                          </dt>
                          <dd className="m-0 pl-2 text-2xl font-bold">
                            Rs. {orderTotal}
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="pt-2.5 ">
                      <button
                        onClick={() => placeOrder()}
                        className="mb-1.5 border-solid bg-purple-700 border-transparent rounded px-12 py-0 h-11 leading-cus text-base border text-white w-full font-medium"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Payment /> */}
    </div>
  );
}

export default Checkout;
