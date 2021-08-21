import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productsSlice";

function Items() {
  const dispatch = useDispatch();

  const { products, productsIsLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div
      class={` min-h-full flex-items-center jerstify-center  ${
        productsIsLoading ? "animate-pulse bg-white-400" : ""
      }`}
    >
      <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <div class="bg-transparent p-3 rounded" key={item.id}>
            <Item key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
