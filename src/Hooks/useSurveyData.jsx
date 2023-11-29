import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSurveyData = () => {
    const{user}=useContext(AuthContext);
    //teenStack quary method
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: [user], //?.email
        queryFn: async () => {
            const surveyDataFetch = await fetch("https://server-site-project.vercel.app/surveyData"); //surveyEmail/?email=${user?.email}
            const surveyData= await surveyDataFetch.json();
            return surveyData;
        }
    });
    // console.log('gggg', data);
    return {data,isLoading,isFetching,refetch};
};

export default useSurveyData;