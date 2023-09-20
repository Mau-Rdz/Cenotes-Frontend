import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
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

  const { token, setToken, deleteToken } = UseToken();
  const { id, setId, deleteId } = UseId();
  
  return (
      <Router>
        {token !== null ? (
          <>
            <Layout deleteToken={deleteToken} deleteId={deleteId}/>
              <Routes>
                <Route path="/" exact element={<AllCenotesPage />}/>
                <Route path="/cenotes" exact element={ <AllCenotesPage />}/>
                <Route path="/cenotes/:id" element={<OneCenotePage />}/>
                <Route path="/new-cenote" element={<NewCenotePage />}/>
                <Route path="/user/:id" element={<h1>Ver usuario</h1>}/>
                <Route path="/new-review/:idCenote/:idUser" element={<NewReviewPage />}/>
              </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" exact element={<LoginPage setToken={setToken} setId={setId} />}/>
            <Route path="/new-user" element={<NewUserPage />}/>
          </Routes>
          )
        }
        </Router>
  );
}

export default App;
