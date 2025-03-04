'use client';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FaTrash, FaChartBar, FaSave } from 'react-icons/fa';

export default function EmployeeManagement() {
    const [employees, setEmployees] = useState([]);

    // Fetch employees from the backend
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('/api/employeeManagement');
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        fetchEmployees();
    }, []);

    // ✅ Update Role or Performance
    const handleAssign = async (id, role, performance) => {
        try {
            const response = await fetch(`/api/employeeManagement`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, role, performance }),
            });

            if (response.ok) {
                setEmployees(employees.map(emp =>
                    emp._id === id ? { ...emp, role, performance } : emp
                ));
                Swal.fire('Updated!', 'Employee details have been assigned.', 'success');
            } else {
                Swal.fire('Error!', 'Failed to update employee.', 'error');
            }
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    // ✅ Remove Employee
    const handleRemoveEmployee = async (id) => {
        try {
            const response = await fetch(`/api/employeeManagement?id=${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setEmployees(employees.filter(employee => employee._id !== id));
                Swal.fire('Removed!', 'Employee has been removed.', 'warning');
            } else {
                Swal.fire('Error!', 'Failed to remove employee.', 'error');
            }
        } catch (error) {
            console.error('Error removing employee:', error);
        }
    };

    // ✅ Track Employee Performance
    const handleTrackPerformance = (employee) => {
        if (!employee.performance) {
            Swal.fire('No Data!', 'Assign a performance rating first.', 'info');
            return;
        }
        Swal.fire({
            title: `${employee.username}'s Performance`,
            text: `Performance rating: ${employee.performance}`,
            icon: 'info',
        });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Employee Management</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300 text-sm md:text-base">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="border border-gray-300 p-3">Name</th>
                            <th className="border border-gray-300 p-3">Role</th>
                            <th className="border border-gray-300 p-3">Performance</th>
                            <th className="border border-gray-300 p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee._id} className="bg-white border-b border-gray-200 text-center hover:bg-gray-100">
                                <td className="border border-gray-300 p-3">{employee.username}</td>
                                <td className="border border-gray-300 p-3 flex justify-between items-center">
                                    <input
                                        type="text"
                                        value={employee.role || ''}
                                        onChange={(e) => {
                                            const updatedRole = e.target.value;
                                            setEmployees(employees.map(emp =>
                                                emp._id === employee._id ? { ...emp, role: updatedRole } : emp
                                            ));
                                        }}
                                        className="border rounded p-2 w-full"
                                        placeholder="Assign Role"
                                    />
                                    <button
                                        onClick={() => handleAssign(employee._id, employee.role, employee.performance)}
                                        className="ml-2 bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded-md flex items-center"
                                    >
                                        <FaSave />
                                    </button>
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <select
                                        value={employee.performance || ''}
                                        onChange={(e) => {
                                            const updatedPerformance = e.target.value;
                                            setEmployees(employees.map(emp =>
                                                emp._id === employee._id ? { ...emp, performance: updatedPerformance } : emp
                                            ));
                                        }}
                                        onBlur={(e) => handleAssign(employee._id, employee.role, e.target.value)}
                                        className="border rounded p-2 w-full"
                                    >
                                        <option value="">Select Performance</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Good">Good</option>
                                        <option value="Average">Average</option>
                                        <option value="Poor">Poor</option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 p-3 flex justify-center gap-2 flex-wrap">
                                    <button
                                        onClick={() => handleTrackPerformance(employee)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                                    >
                                        <FaChartBar className="mr-2" /> Track
                                    </button>
                                    <button
                                        onClick={() => handleRemoveEmployee(employee._id)}
                                        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center"
                                    >
                                        <FaTrash className="mr-2" /> Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
