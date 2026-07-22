import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import jobIcon from "../../assets/job-icon.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.log("Failed to sign out", error);
      })
      
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Hotjobs">Find a Job</NavLink>
      </li>
      <li>
        <NavLink to="/myApplications">My Applications</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

     
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          ></ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={jobIcon} alt="" className="w-6 h-6" />   
          job portal
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </> : 
          <>
          <Link to="/register" className="btn">Register</Link>
        <Link to="/login" >
        <button className="btn">Login</button>
        </Link>
        </>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
