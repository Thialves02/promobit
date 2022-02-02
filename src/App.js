import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CtxApp from "./context/CtxApp";

function App() {
  return (
    <div>
      <CtxApp>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact={true} component={Home} />
          </Switch>
        </Router>
      </CtxApp>
    </div>
  );
}

export default App;
