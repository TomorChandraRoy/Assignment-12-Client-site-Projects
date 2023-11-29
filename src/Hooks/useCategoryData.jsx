import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCategoryData = () => {
    const{user}=useContext(AuthContext);
    //teenStack quary method
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: [user?.category],
        queryFn: async () => {
            const surveyCategoryFetch = await fetch(`http://localhost:5000/surveyCategory/?category=${user?.category}`);
            const surveyCategory= await surveyCategoryFetch.json();
            return surveyCategory;
        }
    });
    console.log('hhhh',data);
    return {data,isLoading,isFetching,refetch};
};

export default useCategoryData;