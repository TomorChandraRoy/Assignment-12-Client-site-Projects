import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";


const AdminRoute = (children) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const locaton = useLocation();
    

    if(loading || isAdminLoading){
        return<div className='ml-44 md:ml-80 lg:ml-[40rem]'>
                <img src="https://i.ibb.co/3CrNhVk/icons.gif" alt="" />
             </div>
    }

    if(user && isAdmin){
        return children;
    }
        //  login page jabe
        return <Navigate state={locaton.pathname} to='/login' replace></Navigate>
};

export default AdminRoute;
