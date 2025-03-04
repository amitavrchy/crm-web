'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import img from '../../../../../public/Job.jpg';

function VendorClientMeet() {
    const [formData, setFormData] = useState({
        vendorName: '',
        clientName: '',
        vendorEmail: '',
        clientEmail: '',
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

        if (!formData.vendorName || !formData.clientName || !formData.vendorEmail || !formData.clientEmail || !formData.phone || !formData.meetingTime) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Fields',
                text: 'Please fill in all required fields.',
            });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/VCMeet', {
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
                    text: `Meeting between ${formData.vendorName} and ${formData.clientName} is set for ${new Date(formData.meetingDate).toDateString()} at ${formData.meetingTime}.`,
                });

                setFormData({
                    vendorName: '',
                    clientName: '',
                    vendorEmail: '',
                    clientEmail: '',
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
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
            <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img src={img.src} alt="Meeting" className="w-full h-full object-cover rounded-xl" />
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/2 p-6">
                    <h2 className="text-3xl font-semibold text-center mb-4">Schedule a Meeting</h2>
                    <p className="text-center text-gray-600 mb-6">Set up a meeting between vendor and client.</p>

                    <div className="space-y-4">
                        <input type="text" name="vendorName" value={formData.vendorName} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Vendor Name *" />
                        <input type="text" name="clientName" value={formData.clientName} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Client Name *" />
                        <input type="email" name="vendorEmail" value={formData.vendorEmail} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Vendor Email *" />
                        <input type="email" name="clientEmail" value={formData.clientEmail} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Client Email *" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Phone Number *" />
                        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Additional Information" />
                        <DatePicker selected={formData.meetingDate} onChange={(date) => setFormData({ ...formData, meetingDate: date })} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500" />
                        <select name="meetingTime" value={formData.meetingTime} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500">
                            <option value="" disabled>Select a time</option>
                            {["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"].map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                        <button onClick={handleSubmit} disabled={loading} className="w-full px-4 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600">
                            {loading ? "Booking..." : "Schedule Meeting"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorClientMeet;