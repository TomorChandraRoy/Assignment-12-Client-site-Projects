import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div className="p-8">
            
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;