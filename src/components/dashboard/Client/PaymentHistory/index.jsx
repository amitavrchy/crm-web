'use client';

import React, { useState, useEffect } from 'react';

function PaymentHistory() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [payments, setPayments] = useState([]);
    const paymentsPerPage = 5;

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch('/api/paymentHistoryClient');
                const data = await response.json();
                setPayments(data);
            } catch (error) {
                console.error("Failed to fetch payment history", error);
            }
        };
        fetchPayments();
    }, []);

    const filteredPayments = payments.filter(payment =>
        payment.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastPayment = currentPage * paymentsPerPage;
    const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
    const currentPayments = filteredPayments.slice(indexOfFirstPayment, indexOfLastPayment);

    const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Payment History</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search payments..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-orange-800 text-white">
                            <th className="p-3 text-left">Job Title</th>
                            <th className="p-3 text-left">Company</th>
                            <th className="p-3 text-left">Payment</th>
                            <th className="p-3 text-left">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPayments.map((payment) => (
                            <tr key={payment._id} className="border-b border-gray-300 hover:bg-gray-100">
                                <td className="p-3">{payment.title}</td>
                                <td className="p-3">{payment.company}</td>
                                <td className="p-3">${payment.payment}</td>
                                <td className="p-3">{payment.deadline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 mx-1 border rounded ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PaymentHistory;
