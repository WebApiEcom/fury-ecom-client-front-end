import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ItemView from "./components/HomeComponents/ItemView";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Protfolio from "./pages/Protfolio";
import Contact from "./pages/Contact";
import CreateUser from "./pages/CreateUser";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/fetch-user-info">
            <Header />
            <CreateUser />
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
