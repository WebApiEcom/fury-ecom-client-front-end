import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { shoppingCart } = useSelector((state) => state.cart);
  return (
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content h-16">
      <div class="flex-1 px-2 mx-2">
        <Link to="/">
          <span class="text-lg font-bold">FURY 🎂</span>
        </Link>
      </div>
      {/* </Link> */}
      <div class="flex-none mr-5 mt-5">
        <div class="my-6 indicator">
          <div class="indicator-item badge badge-secondary">{shoppingCart.length}</div>
          <Link to="/cart">
            <button className="btn btn-square btn-ghost">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

    </div>

  );
}

export default Header;
