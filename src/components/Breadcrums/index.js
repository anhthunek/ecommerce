import { Link, useLocation } from "react-router-dom";
import "./Breadcrums.scss";

function Breadcrums({ id, product }) {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Link key={crumb} to={currentLink}>
          {" "}
          {crumb === id ? product.title : crumb} |{" "}
        </Link>
      );
    });
  return (
    <div className="breadcrums__wrapper">
      <div className="breadcrums__area">
        <Link to="/">Home | </Link>
        {crumbs}
      </div>
    </div>
  );
}

export default Breadcrums;
