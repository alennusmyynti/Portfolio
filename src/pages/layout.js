import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (<div>
        
<nav class="navbar navbar-expand-sm bg-primary navbar-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Portfolio</Link>
      </li>
     <li class="nav-item">
        <Link class="nav-link" to="/CV">CV</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
<Outlet/>
    </div>);
  };
  
  export default Layout;