import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const SurveysDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { user } = useContext(AuthContext);
    const chart = [
        {
            name: '6/18/2023',
            UnVote: 4000,
            Vote: 2400,
            amt: 2400,
        },
        {
            name: '7/5/2023',
            UnVote: 3000,
            Vote: 1398,
            amt: 2210,
        },
        {
            name: '8/18/2023',
            UnVote: 2000,
            Vote: 9800,
            amt: 2290,
        },
        {
            name: '9/18/2023',
            UnVote: 2780,
            Vote: 3908,
            amt: 2000,
        },
        {
            name: '10/18/2023',
            UnVote: 1890,
            Vote: 4800,
            amt: 2181,
        },
        {
            name: '11/18/2023',
            UnVote: 2390,
            Vote: 3800,
            amt: 2500,
        },
        {
            name: '12/18/2023',
            UnVote: 3490,
            Vote: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='my-5'>
              <Helmet>
                <title>Survey Details</title>
            </Helmet>
            <div className=''>
                <h2 className='text-center text-3xl font-bold'>Charts</h2>
                <BarChart className='mx-auto  mt-10 '
                    width={805}
                    height={300}
                    data={chart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Vote" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="UnVote" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-5 '>
                {
                    data.map(singleData => <>
                        <div class="relative flex  max-w-[26rem] flex-col rounded-xl bg-slate-300 p-6 bg-clip-border text-gray-700 shadow-lg">
                            <div class="relative mx-4 mt-4 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">

                                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                                <button
                                    class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    singleData-ripple-dark="true"
                                >
                                    <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            class="h-6 w-6"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div class="p-6">
                                <div class="mb-3 flex items-center justify-between">
                                    <h5 class="block  text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {singleData.title}
                                    </h5>
                                    <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            class="-mt-0.5 h-5 w-5 text-yellow-400"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        5.0
                                    </p>
                                </div>
                                <p class="block  text-base  leading-relaxed text-gray-700 antialiased">
                                    {singleData.description}
                                </p>
                                <div className="flex justify-between">
                                    <p className="mt-5 text-red-500">Most voted: {singleData.like}</p>
                                    <p className="mt-5 text-red-500"> {singleData.category}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="mt-5 text-red-500">{singleData.Deadtime}</p>
                                    <p className="mt-5 text-red-500"> {singleData.option}</p>
                                </div>

                            </div>

                            <div>
                                {
                                    user ? <>
                                        <div className="flex justify-between mt-5">
                                            <div className="form-control ">
                                                <label className="label cursor-pointer ">
                                                    <span className="label-text mr-5 font-semibold">Poll</span>
                                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                                </label>
                                            </div>
                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <span className="label-text mr-5 font-semibold">UnPoll</span>
                                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-control md:w-1/2 mx-auto">
                                            <label className="label mx-auto font-semibold">
                                                <span className="label-text">Comment</span>
                                            </label>
                                            <label className="input-group">
                                                <textarea
                                                    type="text"
                                                    name="description"
                                                    placeholder="Short description"
                                                    className="input input-bordered w-full"
                                                />
                                            </label>
                                        </div>
                                    </> : ""
                                }
                            </div>



                            <div class="p-6 pt-3 flex justify-between mt-4">
                               
                                <Button variant="contained" href="#contained-buttons">
                                Report
                                </Button>

                                <Button variant="contained" href="#contained-buttons">
                                Details
                                </Button>
                            </div>
                        </div>
                    </>)
                }
            </div>
            {/* <div className=" mx-72 h-[350px] mt-10  border border-gray-200 rounded-lg shadow-2xl shadow-blue-500 dark:bg-gray-800 dark:border-gray-700 ">
                <h2 className="text-center font-bold mt-10">{data?.title}</h2>
                <div className="px-5">

                    <p className=" tracking-tight mx-20 text-gray-900 dark:text-white mt-6">{data?.description}</p>

                    <div className=" mt-5 mb-5 text-center">
                        <span className="text-center mx-20 text-xs font-semibold ">{data?.Deadtime}</span>
                    </div>
                    <div className="flex items-center justify-around pt-9">
                        <span className="font-medium text-gray-900 dark:text-white">DisLike: {data?.DisLike}</span>
                        <span className=" font-medium text-gray-900 dark:text-white">Like: {data?.like}</span>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default SurveysDetails;