import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
   return (
      <div>
         <Router>
            <div className="App">
               <Switch>
                  <Route path="/">
                     <Header />
                     <Home />
                  </Route>
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
