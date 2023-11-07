import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-white  rounded-2xl flex items-center justify-between m-3">
      <div>
        <Link
          to={"/"}
          className="btn  normal-case text-xl bg-primary rounded-2xl ml-1 text-primary-content"
        >
          Comfy Zone
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
