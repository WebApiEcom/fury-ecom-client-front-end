import React from "react";

function ProtfolioItem(props) {
   return (
      <div class="row-auto	pb-24 pt-5">
         <div class=" bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200 max-w-sm">
            <img class="rounded-t-lg" src={props.imageUrl} alt="" />
            <div class="py-4 px-8">
               <h1 class="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                  {props.postName}
               </h1>
            </div>
         </div>
      </div>
   );
}

export default ProtfolioItem;
