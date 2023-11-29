import { NavLink, Outlet } from "react-router-dom";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaDatabase, FaHome, FaRegAddressCard, FaUsers } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";



const Dashbord = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex flex-wrap max-w-screen-xl mx-auto font-josefinSans my-10">
            {/*dashboard side bar */}
            <div className="w-64 h-96  bg-green-500 rounded-md">
                <ul className="menu p-4 space-y-1 text-lg">
                    {
                        //addmin desboard
                        isAdmin ? <>
                            <li><NavLink to='/addminHome' >
                                <FaHome />
                                AddMin Home
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashbord/manageUsers'>
                                <FaUsers />
                                Manage users
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashbord/usersDetails'>
                                <FaUsers />
                                Survey Details 
                            </NavLink>
                            </li>
                            
                        </>
                        //user desboard
                            : <>
                                <li><NavLink to='/userhome'>
                                    <FaHome />
                                    User Home
                                </NavLink>
                                </li>
                                <li><NavLink to='/dashbord/surveyCreation'>
                                    <MdFormatListBulletedAdd />
                                    Survey Creation
                                </NavLink>
                                </li>
                                <li><NavLink to='/dashbord/participateSurvey'>
                                    <FaRegAddressCard />
                                    Participate Survey
                                </NavLink>
                                </li>
                            </>
                    }

                    {/* //share DeshBoard */}
                    <div class="divider"></div>

                    <li><NavLink to='/'>
                        <FaHome />
                        Home
                    </NavLink>
                    </li>
                  

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;