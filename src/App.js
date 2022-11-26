import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/Login";
import NewCenotePage from "./pages/NewCenote";
import AllCenotesPage from "./pages/AllCenotes";
import OneCenotePage from "./pages/OneCenote";
import Layout from "./components/layout/Layout";
import NewUserPage from "./pages/NewUser";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/cenotes" exact>
          <Layout>
            <AllCenotesPage />
          </Layout>
        </Route>
        <Route path="/cenotes/:id">
          <Layout>
            <OneCenotePage />
          </Layout>
        </Route>
        <Route path="/new-cenote">
          <Layout>
            <NewCenotePage />
          </Layout>
        </Route>
        <Route path="/user/:id">
          <Layout>
            <h1>Ver usuario</h1>
          </Layout>
        </Route>
        <Route path="/new-user">
          <NewUserPage />
        </Route>
        <Route path="/new-review">
          <Layout>
            <h1>Agregar review</h1>
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
