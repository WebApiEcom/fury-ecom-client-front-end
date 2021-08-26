import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ItemView from "./components/HomeComponents/ItemView";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Protfolio from "./pages/Protfolio";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";

function App() {
   return (
      <div>
         <Router>
            <Switch>
               <Route path="/signup">
                  <SignUp />
               </Route>
               <Route path="/protfolio">
                  <Header />
                  <Protfolio />
               </Route>
               <Route path="/contact">
                  <Header />
                  <Contact />
               </Route>
               <Route path="/Item-view/:itemId">
                  <Header />
                  <ItemView />
               </Route>
               <Route path="/cart">
                  <Cart />
               </Route>
               <Route path="/profile/:userId">
                  <Profile />
               </Route>
               <Route path="/checkout">
                  <Checkout />
               </Route>
               <Route path="/">
                  <Header />
                  <Home />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
