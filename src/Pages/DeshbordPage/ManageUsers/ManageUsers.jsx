import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {

    const [publish, setPublish] = useState(true);

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleButton = () => {
        swal("Good job!", "Your UnPublish Success !", "success") 
        setPublish(!publish)   
       
       
        
    }
    return (
        <div>
             <Helmet>
                <title>Manage Users </title>
            </Helmet>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="ml-3">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'Admin' : <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-lg bg-orange-500">
                                            <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                        </button>}
                                    </td>
                                    <td>
                                 
                                        <button onClick={handleButton} className="btn btn-primary">
                                            {publish ? 'Publish' : 'UnPublish'}
                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;