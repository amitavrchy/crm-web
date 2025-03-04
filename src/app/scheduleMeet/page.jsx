'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import img from '../../../public/Job.jpg';

function ScheduleMeet() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        additionalInfo: '',
        meetingDate: new Date(),
        meetingTime: ''
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.meetingTime) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Fields',
                text: 'Please fill in all required fields.',
            });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/meet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    meetingDate: formData.meetingDate.toISOString(),
                }),
            });

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Meeting Scheduled',
                    text: `Thank you, ${formData.name}. Your meeting is set for ${new Date(formData.meetingDate).toDateString()} at ${formData.meetingTime}.`,
                });

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    additionalInfo: '',
                    meetingDate: new Date(),
                    meetingTime: ''
                });
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'Something went wrong. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col lg:flex-row items-center justify-center flex-1 p-6 lg:p-12 max-w-7xl mx-auto">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-4">
                    <img src={img.src} alt="Meeting" className="rounded-lg shadow-lg w-full h-auto opacity-80" />
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6 lg:p-12">
                    <h2 className="text-3xl font-semibold text-center mb-4">B2B Call with Demand Recruitment</h2>
                    <p className="text-center text-gray-600 mb-6">Please select a date and time for your meeting.</p>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <DatePicker
                            selected={formData.meetingDate}
                            onChange={(date) => setFormData({ ...formData, meetingDate: date })}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div className="mb-4 py-4">
                        <label htmlFor="time-select" className="block text-sm font-medium text-gray-700">Time</label>
                        <select
                            id="time-select"
                            name="meetingTime"
                            value={formData.meetingTime}
                            onChange={handleInputChange}
                            className="mt-2 w-full px-4 py-2 border rounded-lg bg-gray-200 text-gray-700 focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="" disabled>Select a time</option>
                            {["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"].map(time => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>

                    <p className="text-center text-sm text-gray-500 mb-6">All times are in (UTC+06:00) Dhaka</p>

                    <div className="space-y-4 py-6">
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Full Name *" />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Email *" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Phone Number *" />
                        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Additional Information" />
                    </div>

                    <div className="text-center mt-6">
                        <button type="submit" onClick={handleSubmit} disabled={loading} className="w-full px-4 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                            {loading ? "Booking..." : "Book"}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ScheduleMeet;
