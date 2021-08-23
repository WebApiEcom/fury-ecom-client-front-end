import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../redux/userSlice";

import axios from "axios";

function SignUp() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [addressNo, setAddressNo] = useState("");
   const [laneName, setLaneName] = useState("");
   const [city, setCity] = useState("");
   const [password, setPassword] = useState("");
   //    const [comPassword, setComPassword] = useState("");
   const [resMsg, setResponseMessage] = useState("");

   const { token } = useSelector((state) => state.userX);
   const dispatch = useDispatch();

   // Getting Name
   const onNameChange = (event) => {
      setName(event.target.value);
   };
   // Getting Email
   const onEmailChange = (event) => {
      setEmail(event.target.value);
   };
   // Getting Phone Number
   const onPhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
   };
   // Getting Address
   const onAddressNoChange = (event) => {
      setAddressNo(event.target.value);
   };
   // Getting Lane Name
   const onLaneNameChange = (event) => {
      setLaneName(event.target.value);
   };
   // Getting City
   const onCityChange = (event) => {
      setCity(event.target.value);
   };
   // Getting Password
   const onPasswordChange = (event) => {
      setPassword(event.target.value);
   };
   //    // Getting Confirm Password
   //    const onComPasswordChange = (event) => {
   //       setComPassword(event.target.value);
   //    };
   const signUp = () => {
      //   if (password == comPassword) {
      axios
         .post("http://localhost:4000/fury/users", {
            name: name,
            email: email,
            phone_number: phoneNumber,
            address: {
               address_No: addressNo,
               lane: laneName,
               city: city,
            },
            userType: "user",
            password: password,
         })
         .then(
            (response) => {
               console.log(response.data);
               dispatch(setUserToken(response.data.token));
               setResponseMessage("");
               //   setName("");
               //   setMessage("");
               //   setEmail("");
            },
            (error) => {
               console.log(error.response.data);
               setResponseMessage(error.response.data);
            }
         );
      //   } else {
      //      setPassword("");
      //      setComPassword("");
      //      setResponseMessage("Confirm Password and Password Should Be Matched");
      //   }
   };
   return (
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
         <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-7/12 p-6 sm:p-12">
               <div className="mt-12 flex flex-col items-center">
                  <h1 className="text-2xl xl:text-3xl font-extrabold">
                     Sign up for Fury Cake
                  </h1>
                  <div class="my-1 border-b text-center">
                     {resMsg == "" ? (
                        <div class="leading-none px-2 inline-block text-sm text-red-600 tracking-wide font-medium bg-white transform translate-y-1/2"></div>
                     ) : (
                        <div class="leading-none px-2 inline-block text-sm text-red-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                           {resMsg}
                        </div>
                     )}
                  </div>
                  <div className="w-full flex-1 mt-8">
                     <div className="mx-auto max-w-md">
                        <input
                           className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5"
                           type="text"
                           placeholder="Name"
                           value={name}
                           onChange={onNameChange}
                        />
                        <input
                           className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                           type="email"
                           placeholder="Email"
                           value={email}
                           onChange={onEmailChange}
                        />
                        <input
                           className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                           type="tel"
                           placeholder="Phone Number"
                           value={phoneNumber}
                           onChange={onPhoneNumberChange}
                        />
                        <input
                           className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                           type="text"
                           placeholder="Address Lane No"
                           value={addressNo}
                           onChange={onAddressNoChange}
                        />
                        <input
                           className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                           type="text"
                           placeholder="Lane Name"
                           value={laneName}
                           onChange={onLaneNameChange}
                        />
                        <input
                           className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                           type="text"
                           placeholder="City"
                           value={city}
                           onChange={onCityChange}
                        />
                        <input
                           className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                           type="password"
                           placeholder="Password"
                           value={password}
                           onChange={onPasswordChange}
                        />
                        {/* <input
                           className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                           type="password"
                           placeholder="Confirm Password"
                           value={comPassword}
                           onChange={onComPasswordChange}
                        /> */}
                        <button
                           onClick={signUp}
                           className="mt-5 tracking-wide font-semibold bg-yellow-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
                           <svg
                              className="w-6 h-6 -ml-2"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           >
                              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                              <circle cx="8.5" cy="7" r="4" />
                              <path d="M20 8v6M23 11h-6" />
                           </svg>
                           <span className="ml-3">Sign Up</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex-1 bg-yellow-50 text-center hidden lg:flex">
               <img
                  src="https://res.cloudinary.com/thushal/image/upload/v1629528460/Birthday_cake-amico_hseb4q.svg"
                  className="w-96 mx-auto"
               />
            </div>
         </div>
      </div>
   );
}

export default SignUp;
