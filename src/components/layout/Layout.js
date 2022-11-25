import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation name='Cenotes mayas'/>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
