import { Helmet } from "react-helmet-async";
import FeaturedSurvey from "./FeaturedSurvey/FeaturedSurvey";
import LatestSurveys from "./LatestSurveys/LatestSurveys";
import Faq from "./FAQSection/FAQSection";
import moment from 'moment';
import { Button } from "@mui/material";
import Blog from "../BlogPage/Blog";
import SliderPage from './../Slider/SliderPage';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Survey| Home</title>
            </Helmet>
            <div>
                <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/1GpKc2x/34682605-8136206.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Survey</h1>
                            <p className="mb-5 text-2xl">A survey is a method of gathering information using relevant questions from a sample of people with the aim of understanding populations as a whole.</p>
                            <Button variant="contained" href="#contained-buttons">
                                Explore
                            </Button>

                        </div>
                    </div>
                </div>

                <div className="my-5">
                    <FeaturedSurvey></FeaturedSurvey>
                </div>
                <SliderPage></SliderPage>
                <div className="my-5">
                    <LatestSurveys></LatestSurveys>
                </div>
                <div className="">
                    <section class="bg-white dark:bg-gray-900 text-center mx-auto">
                        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Surveys are a powerful tool for data collection, enabling us to collect valuable data quickly and efficiently. By understending the purpose and process of surveys, we can gather accurate and meaningful data that can inform our decisions and lead to successful outcomes."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-lg font-bold text-gray-500 dark:text-gray-400">CEO at Survey</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </div>
                <div className=" mx-auto text-center font-extrabold text-2xl"> {moment().format('MMMM Do YYYY, h:mm:ss a')}
                </div>
                <Blog></Blog>
                <div className="my-6">
                    <Faq></Faq>
                </div>
            </div>


        </div>
    );
};

export default Home;