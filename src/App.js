import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ItemView from "./components/HomeComponents/ItemView";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Item-view/:itemId">
            <Header />
            <ItemView />
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
