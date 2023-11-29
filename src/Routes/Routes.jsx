import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/HomePage/Home";
import Surveys from "../Pages/SurveysPage/Surveys";
import SurveysDetails from "../Pages/SurveysDetailsPage/SurveysDetails";
import Pricing from "../Pages/PricingPage/Pricing";
import SurveyCreation from "../Pages/DeshbordPage/SurveyCreation";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";
import Dashbord from "../LayOut/Dashbord";
import ParticipateSurvey from "../Pages/ParticipateSurveyPage/ParticipateSurvey";
import PrivecteRoute from './../PrivecteRoute/PrivecteRoute';
import SurveyUsers from "../Pages/DeshbordPage/SurveyUsers/SurveyUsers";
import Payment from "../Pages/DeshbordPage/Payment/Payment";
import AboutUs from "../Pages/AboutUsPage/AboutUs";
import Error from "../Pages/ErrorPage/Error";
import ManageUsers from "../Pages/DeshbordPage/ManageUsers/ManageUsers";





export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/surveys',
          element:<Surveys></Surveys>
        },
        
  
        {
          path: '/surveysDetails',
          element: <SurveysDetails></SurveysDetails>,
          loader: () => fetch('http://localhost:5000/surveyData')
         
        },
        // {
        //   path: '/surveysDetails/:id',
        //   element: <SurveysDetails></SurveysDetails>,
        //   loader:({params}) => fetch(`http://localhost:5000/surveyData/${params.id}`)
         
        // },
        {
          path:'/pro',
          element: <Pricing></Pricing>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <Signup></Signup>
        },
        {
          path:'/aboutus',
          element: <AboutUs></AboutUs>
        },
        
      ]
    },
    {
      path: 'dashbord',
      element: <PrivecteRoute><Dashbord></Dashbord></PrivecteRoute>,
      children:[
        {
          path: 'surveyCreation',
          element: <SurveyCreation></SurveyCreation>,
        },
        {
          path: 'participateSurvey',
          element: <ParticipateSurvey></ParticipateSurvey>,
        },
        {
          path: 'payment',
          element: <Payment></Payment>,
        },

        //admin routes
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>,
        },
        {
          path: 'usersDetails',
          element: <SurveyUsers></SurveyUsers>,
          loader: () => fetch('http://localhost:5000/surveyData')
        },
      ]
    }
  ]);