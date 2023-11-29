import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const SurveysAllData = ({ singleData }) => {
    const { _id, title, Deadtime, description, category, option, DisLike, like, email }
        = singleData;

        
   
    return (
        <div>
            <div className="w-92 md:h-[430px] bg-green-400 border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-5 mb-5">

                <div className="px-5 space-x-5">
                    <a href="#">
                        <h5 className="text-xl mt-5 text-center font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <p className="my-5 text-center" >{description}</p>
                    </a>
                  
                    <div className="flex items-center md:gap-1 justify-between pt-9">
                        <span className="font-medium text-gray-900 dark:text-white">Option: {option}</span>
                        <p className="">{Deadtime}</p>
                        
                    </div>
                    <div className=" flex justify-between  items-center mt-3 ">
                    <span className="">{category}</span>
                    <Link  className=" mt-5"> {/* to={`/surveysDetails/${_id}`} */}
                    <Button variant="contained" href="#contained-buttons">
                    Surveys
                            </Button>
                         
                        </Link>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default SurveysAllData;