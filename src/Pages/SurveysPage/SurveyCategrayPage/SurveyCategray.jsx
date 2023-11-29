import SurveyCategrayAllData from "./SurveyCategrayAllData";

const SurveyCategray = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10 mt-20  p-5 rounded'>
                {
                    item?.map(singleCategray => <SurveyCategrayAllData singleCategray={singleCategray} key={singleCategray._id}></SurveyCategrayAllData>)
                }
            </div>
        </div>
    );
};

export default SurveyCategray;