import { useEffect } from "react";
import Items from "../components/HomeComponents/Items";
import { useDispatch, useSelector } from "react-redux";
import { setOrderStatus } from "../redux/cartSlice";


function Home() {

  const { orderStatus } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setOrderStatus(false));
    }, 5000);
  }, []);

  return (
    <div>
      <div class="container mx-auto">
        {!orderStatus ? null : (
          <div class="alert alert-success">
            <div class="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
              </svg>
              <label>Order Placed Successfully!</label>
            </div>
          </div>
        )}
        <Items />
      </div>
    </div>
  );
}

export default Home;
