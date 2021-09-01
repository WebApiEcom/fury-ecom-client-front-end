import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { setUserToken, setToCheckOut } from "../redux/userSlice";

function Header() {
  const { shoppingCart } = useSelector((state) => state.cart);
  const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();


  const profile = async () => {
    await axios
      .get(`http://localhost:4000/fury/users/${user ? user.email : null}`)
      .then((res) => {
        if (res.data.isUser === false) {
          dispatch(setToCheckOut(false));
          history.push("/fetch-user-info");
        } else {
          dispatch(setUserToken(res.data.token));
          history.push(`/profile/${res.data.token}`);
        }
      })
      .catch((error) => {

      });
  }

  return (
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div class="px-2 mx-2 navbar-start">
        <Link to="/">
          <span class="text-lg font-bold">FURY 🎂</span>
        </Link>
      </div>

      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
          <Link to="/">
            <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          <Link to="/protfolio">
            <a class="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
          </Link>
          <Link to="/contact">
            <a class="btn btn-ghost btn-sm rounded-btn">Contact</a>
          </Link>
        </div>
      </div>

      <div class="navbar-end mr-10">
        {isAuthenticated ? (
          <div className="flex ">
            <div class="avatar online mr-10 -mt-1">
              <div class="rounded-full w-10 h-10">
                <button
                  onClick={() => profile()}
                ><img src={user.picture} alt="" /></button>
              </div>
            </div>

            <p className="pr-12 mt-1 cursor-pointer" onClick={() => logout()}>
              Sign Out
            </p>
          </div>
        ) : (
          <p
            className="pr-12 mt-1 cursor-pointer"
            onClick={() => {
              loginWithPopup();
            }}
          >
            Sign In
          </p>
        )}

        <div class="my-6 indicator">
          <div class="indicator-item badge badge-secondary">
            {shoppingCart.length}
          </div>
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
