import MainNavigation from "./MainNavigation";

function Layout({deleteToken, deleteId}) {
  return (
    <div>
      <MainNavigation deleteToken={deleteToken} deleteId={deleteId} name='Cenote Quest'/>
    </div>
  );
}

export default Layout;