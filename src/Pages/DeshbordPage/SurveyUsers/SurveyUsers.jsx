import { useLoaderData } from "react-router-dom";
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Helmet } from "react-helmet-async";


const SurveyUsers = () => {
    const data = [
        {
          name:'Education',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name:'Social',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name:'Technology',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name:'Health',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name:'Demographics',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Work ',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
      
      ];


    const userData = useLoaderData();
    console.log(userData);
    // const {title} = userData;
    // console.log(title);
    return (
        <div>
             <Helmet>
                <title>Survey Users</title>
            </Helmet>
            
            <div className="ml-3">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-base">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Time</th>
                                <th>Voted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user, index) =>
                                    <tr key={user._id}>

                                        <th>{index + 1}</th>
                                        <td>{user.title}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.Deadtime}
                                        </td>
                                        <td>
                                            {user.like}
                                        </td>
                                    </tr>
                                )

                            }



                        </tbody>
                    </table>
                </div>

            </div>
            <div className="">
                <BarChart className="mx-auto mt-5"
                    width={800}
                    height={300}
                    data={data}
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
                    
                    <Legend />
                    <Bar dataKey="pv" barSize={20} fill="#8884d8" />
                    <Bar dataKey="uv" barSize={20} fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default SurveyUsers;




