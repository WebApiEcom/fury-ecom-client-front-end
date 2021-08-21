import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setCartTotal } from "../../redux/cartSlice";
import {
   getProduct,
   addPrice,
   substractPrice,
} from "../../redux/productsSlice";
import { setAutoFreeze } from "@reduxjs/toolkit/node_modules/immer";

function ItemView() {
   // VARIABLES
   const history = useHistory();
   const { itemId } = useParams();
   const dispatch = useDispatch();
   const { product, productIsLoading } = useSelector((state) => state.products);
   const [qty, setQty] = useState(1);
   const { shoppingCart, orderTotal } = useSelector((state) => state.cart);

   useEffect(() => {
      dispatch(getProduct(itemId));
      console.log(product);
   }, []);

   // INCREASE QUANTITY
   const onPlus = () => {
      setQty(qty + 1);
      const amount =
         (product && product.prices ? product.prices.price : null) -
         ((product && product.prices ? product.prices.discount : null) / 100) *
            (product && product.prices ? product.prices.price : null);
      const sum = amount + product.discountedPrice;
      dispatch(addPrice(sum));
   };

   const addToCart = () => {
      var cloneshoppingcart = JSON.parse(JSON.stringify(shoppingCart));
      const newProduct = {
         item_id: product._id,
         item_name: product.name,
         qty: qty,
         price: parseInt(
            product.prices.price -
               product.prices.price * (product.prices.discount / 100)
         ),
         amount: product.discountedPrice,
         img_url: product.imgUrl,
      };
      var itemPrice = newProduct.price * qty;
      var cloneTotal = parseFloat(orderTotal);

      var item = cloneshoppingcart.find(
         (item) => item.item_id === newProduct.item_id
      );

      if (item) {
         item.qty = item.qty + newProduct.qty;
         item.amount = item.amount + newProduct.amount;
      } else {
         cloneshoppingcart.push(newProduct);
      }

      dispatch(setCart(cloneshoppingcart));
      dispatch(setCartTotal(cloneTotal + itemPrice));
   };

   // DECREASE QUANTITY
   const onSubstract = () => {
      if (qty == 1) {
      } else {
         setQty(qty - 1);
         const amount =
            (product && product.prices ? product.prices.price : null) -
            ((product && product.prices ? product.prices.discount : null) /
               100) *
               (product && product.prices ? product.prices.price : null);
         const sub = product.discountedPrice - amount;
         dispatch(substractPrice(sub));
      }
   };

   return (
      <div
         class={`container mx-auto  ${
            productIsLoading ? "animate-pulse bg-white-400" : ""
         }`}
      >
         <div class="card lg:card-side bordered mt-8">
            <figure
               class="w-60 bg-red-300"
               style={{ height: "500px", maxWidth: "800px" }}
            >
               <img className="h-full" src={product.imgUrl} />
            </figure>

            <div class="card-body  flex flex-col justify-center pl-5">
               <div class="pl-10">
                  <h2 class="card-title">
                     {product.name}
                     {product.isActive ? (
                        <div class="badge mx-2 badge-secondary">NEW</div>
                     ) : null}
                  </h2>
                  <h3 className="font-semibold">{product.category}</h3>
                  <p class="mt-4">{product.description}</p>

                  <div class="flex flex-row mt-3">
                     <h2 class="card-title">LKR </h2>
                     <h2 class="card-title ml-2">{product.discountedPrice}</h2>
                  </div>

                  <div class="btn-group mt-3">
                     <button
                        class="btn btn-outline btn-primary"
                        onClick={onPlus}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-6 w-6"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                           />
                        </svg>
                     </button>
                     <div class="btn btn-outline btn-primary">{qty}</div>
                     <button
                        class="btn btn-outline btn-primary"
                        onClick={onSubstract}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-6 w-6"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18 12H6"
                           />
                        </svg>
                     </button>
                  </div>

                  <div class="mt-7">
                     <button class="btn btn-wide" onClick={addToCart}>
                        ADD TO CART
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ItemView;
