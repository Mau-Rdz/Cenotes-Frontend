import { Route, Switch } from "react-router-dom";
import NewCenotePage from './pages/NewCenote'
import AllCenotesPage from "./pages/AllCenotes";
import OneCenotePage from "./pages/OneCenote";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <h1>Login</h1>
        </Route>
        <Route path="/cenotes" exact>
          <AllCenotesPage />
        </Route>
        <Route path="/cenotes/:id">
          <OneCenotePage />
        </Route>
        <Route path="/new-cenote">
          <NewCenotePage />
        </Route>
        <Route path="/user" exact>
          <h1>Ver usuario</h1>
        </Route>
        <Route path="/user/:id">
          <h1>Ver usuario</h1>
        </Route>
        <Route path="/new-user">
          <h1>Agregar usuario</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
