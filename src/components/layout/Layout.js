import MainNavigation from "./MainNavigation";

function Layout({deleteToken, deleteId}) {
  return (
    <div>
      <MainNavigation deleteToken={deleteToken} deleteId={deleteId} name='Cenotes mayas'/>
    </div>
  );
}

export default Layout;
