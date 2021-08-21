import React, { useEffect, useState } from "react";
import ProtfolioItem from "../components/PortfolioComponents/ProtfolioItem";
import axios from "axios";

function Protfolio() {
   const [allInstaPosts, setInsta] = useState([]);

   const onGetInsta = () => {
      axios
         .get(
            `https://graph.instagram.com/v11.0/4356841441104260/media?fields=id,media_url,caption&access_token=${process.env.REACT_APP_INSTA_API}`
         )
         .then(
            (response) => {
               console.log(response.data.data);
               setInsta(response.data.data);
            },
            (error) => {
               console.error(error);
            }
         );
   };
   useEffect(() => {
      const checkenv = process.env.REACT_APP_INSTA_API;
      console.log(checkenv);
      onGetInsta();
   }, []);

   return (
      <div class="grid gap-x-8 gap-y-4 grid-cols-3">
         {allInstaPosts.map((post) => (
            <div key={post.id}>
               <ProtfolioItem
                  imageUrl={post.media_url}
                  postName={post.caption}
               />
            </div>
         ))}
      </div>
   );
}

export default Protfolio;
