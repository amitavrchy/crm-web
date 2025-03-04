'use client';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FaUserPlus, FaTrash, FaTasks } from 'react-icons/fa';

const fetchUsers = async () => {
    try {
        const response = await fetch('/api/userManagement');
        if (!response.ok) throw new Error("Failed to fetch users");
        const users = await response.json();
        return users;
    } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to fetch users', 'error');
        return [];
    }
};

export default function UserManagement() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`/api/userManagement`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id })
                });

                if (!response.ok) throw new Error("Failed to delete user");
                setUsers(users.filter(user => user._id !== id));
                Swal.fire('Deleted!', 'User has been removed.', 'success');
            } catch (error) {
                Swal.fire('Error', 'Failed to delete user', 'error');
            }
        }
    };

    const handleAssignJob = async (id) => {
        const { value: job } = await Swal.fire({
            title: 'Assign Job',
            input: 'text',
            inputLabel: 'Enter Job Title',
            showCancelButton: true,
            confirmButtonText: 'Assign',
        });

        if (job) {
            try {
                const response = await fetch(`/api/userManagement`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id, job })
                });

                if (!response.ok) throw new Error("Failed to assign job");
                setUsers(users.map(user => user._id === id ? { ...user, job } : user));
                Swal.fire('Success!', 'Job assigned successfully.', 'success');
            } catch (error) {
                Swal.fire('Error', 'Failed to assign job', 'error');
            }
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">User Management</h1>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-2">Name</th>
                            <th className="border border-gray-300 p-2">Role</th>
                            <th className="border border-gray-300 p-2">Email</th>
                            <th className="border border-gray-300 p-2">Job</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id} className="text-center bg-white border-b border-gray-200">
                                    <td className="border border-gray-300 p-2">{user.username}</td>
                                    <td className="border border-gray-300 p-2">{user.userType}</td>
                                    <td className="border border-gray-300 p-2">{user.email}</td>
                                    <td className="border border-gray-300 p-2">{user.job || 'Not Assigned'}</td>
                                    <td className="border border-gray-300 p-2 flex justify-center">
                                        <button onClick={() => handleAssignJob(user._id)} className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-700 flex items-center">
                                            <FaTasks />
                                        </button>
                                        <button onClick={() => handleDelete(user._id)} className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-700 flex items-center">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-4">User Coming...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
