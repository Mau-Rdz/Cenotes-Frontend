import { Route, Switch } from "react-router-dom";
import NewCenotePage from "./pages/NewCenote";
import AllCenotesPage from "./pages/AllCenotes";
import OneCenotePage from "./pages/OneCenote";
import Layout from "./components/layout/Layout";
import NewUserPage from "./pages/NewUser";

function App() {
  return (
    <div>
      <Layout>
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
          <Route path="/user/:id">
            <h1>Ver usuario</h1>
          </Route>
          <Route path="/new-user">
            <NewUserPage />
          </Route>
          <Route path="/new-review">
            <h1>Agregar review</h1>
          </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
