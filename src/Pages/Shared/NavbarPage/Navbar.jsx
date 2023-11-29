
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";



const Navbar = () => {
  const{user, logOut}=useContext(AuthContext);
  console.log(user?.photoURL);
  const handleSignOut=()=>{
      logOut()
      .then()
      .catch()
  }

  console.log(user);
    const navLinks = (
        <>
          <div className="flex lg:gap-4">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/surveys">Surveys</NavLink></li>
             <li><NavLink to="/surveysDetails">Surveys Details</NavLink></li>
             <li><NavLink to="/pro">Pro</NavLink></li>
             <li><NavLink to="/dashbord">Deshbord</NavLink></li>

          </div>
        </>
    )
    return (
        <div className="navbar  bg-gray-200 my-5 rounded">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-5 w-5" fill="none" viewBox="0 0 24 24"  stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-[405px]">

              {navLinks}

            </ul>
          </div>
          <div className="flex items-center justify-center" ><img className="w-[100px] h-[55px] " src="https://i.ibb.co/nmBjrP8/icon2-removebg-preview.png" alt="logo"/><span className="text-2xl">Suaury</span></div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-semibold px-1">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-5 text-base font-semibold">
          {
              user ?
              <>
              <div className="flex justify-center items-center gap-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                  <div className="w-10 rounded-full">
                    {
                      user &&
                      <img src={user.photoURL} alt="" />
                    }
                   
                  </div>

                </label>
                { user &&
                  <div><p >{user.displayName}</p>
                     
                  </div>
               
                  }
              </div>

                <button onClick={handleSignOut} className="btn  font-bold text-[18px]">LogOut</button>
              </>
              : <Link to='/login' ><button  className="btn font-bold text-[18px]">Login</button></Link>
            }

        </div>
      </div>
    );
};

export default Navbar;