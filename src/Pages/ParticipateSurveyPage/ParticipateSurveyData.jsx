import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ParticipateSurveyData = ({ singleData, refetch }) => {
    const { _id, title, DeadTime, description, catogray, option, DisLike, like, email }
        = singleData;
    return (
        <div>
             <Helmet>
                <title>ParticipateSurveyData</title>
            </Helmet>
            <div className="w-92 md:h-[550px] bg-green-400 border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-5 mb-5">

                <div className="px-5  ">
                    <a href="#">
                        <h5 className="text-xl mb-5 font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <span >{description}</span>
                    </a>
                    <div className="flex items-center mt-5 ">
                        <span className="ml-4">{catogray}</span>
                    </div>
                    <p className="">{DeadTime}</p>
                    <div className="flex items-center  md:gap-1 justify-between pt-9">
                        <div className="form-control">
                            <label className="label cursor-pointer ">
                                <span className="label-text mr-5">Like</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text mr-5">DisLike</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-around ">
                        <Link >
                            <button
                                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Report</button>
                        </Link>
                        <Link className="" to={`/surveysDetails/${_id}`}>
                            <button
                                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Participate</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticipateSurveyData;