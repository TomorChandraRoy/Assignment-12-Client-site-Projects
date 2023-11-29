import useSurveyData from "../../Hooks/useSurveyData";
import ParticipateSurveyData from "./ParticipateSurveyData";

const ParticipateSurvey = () => {
    //!!--TenStackQuary diye data load -- and hooks page thake Ascha!!
    const { data, isFetching, refetch, isLoading, } = useSurveyData();
    console.log(data, isLoading, isFetching);

    if (isLoading === true) {
        return isLoading
    }
    return (
        <div>
        <h2 className="text-center text-3xl font-bold">Participate Survey</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 mt-10 ml-6" >
            {
                data.map(singleData => <ParticipateSurveyData key={singleData._id} singleData={singleData} refetch={refetch} ></ParticipateSurveyData>)
            }
        </div>
    </div>
    );
};

export default ParticipateSurvey;