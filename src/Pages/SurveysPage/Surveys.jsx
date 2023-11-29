import useSurveyData from "../../Hooks/useSurveyData";
import SurveysAllData from "./SurveysAllData";
import useAuth from './../../Hooks/useAuth';
import BlankPage from "../Shared/BlankPage/BlankPage";
import { Helmet } from "react-helmet-async";

const Surveys = () => {
    const {user} = useAuth();
    //!!--TenStackQuary diye data load -- and hooks page thake Ascha!!
    const { data, isFetching, refetch, isLoading, } = useSurveyData();
    console.log(data, isLoading, isFetching);

    if (isLoading === true) {
        return isLoading
    }
    return (
        <div>
            <Helmet>
                <title>Survey Page</title>
            </Helmet>
            {
                user? <>
                  <h2 className="text-center font-semibold text-xl">Filter</h2>
            <div className="flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <select className="input input-bordered w-full" name="categorye" id="category">
                            <option value="Education">Education</option>
                            <option value="Social Issues">Social Issues</option>
                            <option value="Technology Usage">Technology Usage</option>
                            <option value="Health and Wellness">Health and Wellness</option>
                            <option value="Demographics">Demographics</option>
                            <option value="Work and Employment">Work and Employment</option>
                        </select>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <label className="input-group">
                        <select className="input input-bordered w-full" name="categorye" id="category">
                            <option value="Education">Education Survey</option>
                            <option value="Education">Social Survey</option>
                            <option value="Education">Technology Usage Survey</option>
                            <option value="Education">Health and Wellness Survey</option>
                            <option value="Education">Demographics Survey</option>
                            <option value="Education">Work and Employment Survey</option>
                        </select>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Vote</span>
                    </label>
                    <label className="input-group">
                        <select className="input input-bordered w-full" name="categorye" id="category">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            
                        </select>
                    </label>
                </div>
            </div>
                </> :""
            }
          
            {
                user? <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 mt-20" >
               
                {
                    data.map(singleData => <SurveysAllData key={singleData._id} singleData={singleData} refetch={refetch} ></SurveysAllData>)
                    
                }
            </div>
            :<BlankPage></BlankPage>
            }
            
        </div>
    );
};

export default Surveys;