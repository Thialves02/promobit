import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CtxApp from "./context/CtxApp";
import VerFilme from "./pages/VerFilme/VerFilme";

function App() {
  return (
    <div>
      <CtxApp>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/filme/:id" exact={true} component={VerFilme} />
          </Switch>
        </Router>
      </CtxApp>
    </div>
  );
}

export default App;
