import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CtxApp from "./context/CtxApp";
import VerFilme from "./pages/VerFilme/VerFilme";

function App() {
  return (
    <>
      <CtxApp>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/filme/:id" exact={true} component={VerFilme} />
            </Switch>
          </main>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
