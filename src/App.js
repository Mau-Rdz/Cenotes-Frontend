import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/Login";
import NewCenotePage from "./pages/NewCenote";
import AllCenotesPage from "./pages/AllCenotes";
import OneCenotePage from "./pages/OneCenote";
import Layout from "./components/layout/Layout";
import NewUserPage from "./pages/NewUser";
import UseToken from "./components/App/UseToken";
import UseId from "./components/App/UseId";
import NewReviewPage from "./pages/NewReview";


function App() {

  const { token, setToken } = UseToken();
  const { id, setId } = UseId();
  if (!token) {
    return (
      <div>
        <Switch>
          <Route path="/" exact>
            <LoginPage SetToken={setToken} SetId={setId} />
          </Route>
          <Route path="/new-user">
            <NewUserPage />
          </Route>
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <AllCenotesPage />
          </Layout>
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
        {/* <Route path="/new-user">
          <NewUserPage />
        </Route> */}
        <Route path="/new-review/:idCenote/:idUser">
          <Layout>
            <NewReviewPage />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
