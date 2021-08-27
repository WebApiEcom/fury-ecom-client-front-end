import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  console.log("props", props.item.prices.price);
  let discountPrice = props.item.prices.discount / 100;
  discountPrice = discountPrice * props.item.prices.price;

  return (
    <div class="card bordered h-full shadow-md">
      <figure className="h-66" style={{ height: "350px" }}>
        <img src={props.item.imgUrl} className="h-full" />
      </figure>

      {/* card-body */}
      <div class="mt-5 pl-5">
        <h2 class="card-title">
          {props.item.name}

          {props.item.isActive ? (
            <div class="badge mx-2 badge-error">NEW</div>
          ) : null}
        </h2>

        <p class="font-semibold">{props.item.weight}</p>

        <div style={{ height: "65px" }}>
          <div className="mt-3">
            {!props.item.prices.discount == 0 ? (
              <p className=" font-medium text-red-500">
                <div className="flex font-medium ">
                  <del className="text-purple-600">
                    LKR{props.item.prices.price}
                  </del>
                  <ul className="ml-3 text-red-600">
                    {props.item.prices.discount}% OFF
                  </ul>
                </div>
                <p className="mt-1 text-xl">
                  LKR {props.item.prices.price - discountPrice}
                </p>
              </p>
            ) : (
              <p className="font-medium text-black-500 text-xl">
                LKR {props.item.prices.price}
              </p>
            )}
          </div>
        </div>

        {/* card-actions  */}
        <div class="flex justify-end  mb-5 pr-5">
          <div class="flex">
            {props.item.qty == 0 ? (
              <button class="btn btn-secondary" disabled="disabled">
                Not Available
              </button>
            ) : (
              <Link to={`/item-view/${props.item._id}`}>
                <button class="btn btn-warning">
                  <span className="mr-1">View</span>
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
