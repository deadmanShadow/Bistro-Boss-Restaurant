import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = id => {
        
    }


    const handleDelete = user => {

    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users : {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>{users.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>}</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Blue</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;