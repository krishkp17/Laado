import React, { useState } from 'react';
import {
    HiMail,
    HiPhone,
    HiLocationMarker,
    HiClock
} from 'react-icons/hi';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

  
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

      
        const serviceID = 'service_gpauzvz';

      
        const adminTemplateID = 'template_s54rzuh';

        const autoReplyTemplateID = 'template_ovxr7ci';

        const publicKey = 'nbkWMXigKXhkDWd_q';

        // Data sent to both EmailJS templates
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        };

        try {
            // ------------------------------------------------
            // 1. Send customer message to your Gmail
            // ------------------------------------------------
            await emailjs.send(
                serviceID,
                adminTemplateID,
                templateParams,
                publicKey
            );

            // ------------------------------------------------
            // 2. Send automatic thank-you email to customer
            // ------------------------------------------------
            await emailjs.send(
                serviceID,
                autoReplyTemplateID,
                templateParams,
                publicKey
            );

            // Success notification
            toast.success(
                `Thank you, ${formData.name}! Message sent successfully.`
            );

            // Clear form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            console.error('EmailJS Error:', error);
            console.error('Status:', error?.status);
            console.error('Text:', error?.text);

            toast.error(
                error?.text || 'Failed to send message. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900"
        >
            <div className="max-w-7xl mx-auto space-y-16">

                {/* ================================
                    HEADER
                ================================= */}
                <div className="text-center max-w-3xl mx-auto space-y-4">

                    <span className="bg-orange-500/10 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold inline-block border border-orange-500/20">
                        Get In Touch
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        We’d Love to Hear{' '}
                        <span className="text-orange-600">
                            From You
                        </span>
                    </h2>

                    <p className="text-slate-600 text-lg">
                        Have questions about our daily mess plans or want to
                        schedule a food trial? Reach out to us below!
                    </p>

                </div>

                {/* ================================
                    CONTENT GRID
                ================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* ================================
                        LEFT COLUMN
                    ================================= */}
                    <div className="space-y-6">

                        <h3 className="text-2xl font-bold">
                            Contact Information
                        </h3>

                        <div className="space-y-4 pt-2">

                            {/* Location */}
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">

                                <div className="bg-orange-600 text-white p-3 rounded-xl text-xl flex-shrink-0">
                                    <HiLocationMarker />
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        Our Location
                                    </h4>

                                    <p className="text-slate-600 text-sm mt-1">
                                        123 Food Street, Near Student Hostel Area,
                                        City Center
                                    </p>
                                </div>

                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">

                                <div className="bg-orange-600 text-white p-3 rounded-xl text-xl flex-shrink-0">
                                    <HiPhone />
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        Phone Number
                                    </h4>

                                    <p className="text-slate-600 text-sm mt-1">
                                        +91 98765 43210 / +91 91234 56789
                                    </p>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">

                                <div className="bg-orange-600 text-white p-3 rounded-xl text-xl flex-shrink-0">
                                    <HiMail />
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        Email Address
                                    </h4>

                                    <p className="text-slate-600 text-sm mt-1">
                                        support@messdelight.com
                                    </p>
                                </div>

                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">

                                <div className="bg-orange-600 text-white p-3 rounded-xl text-xl flex-shrink-0">
                                    <HiClock />
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        Working Hours
                                    </h4>

                                    <p className="text-slate-600 text-sm mt-1">
                                        Mon - Sun: 7:00 AM - 10:00 PM
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* ================================
                            GOOGLE MAP
                        ================================= */}
                        <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-64 w-full">

                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.103774883467!2d77.20898831508215!3d28.613939182425515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjIiTiA3N8KwMTInNDQuMyJF!5e0!3m2!1sen!2sin!4f1600!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>

                        </div>

                    </div>

                    {/* ================================
                        RIGHT COLUMN - FORM
                    ================================= */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">

                        <h3 className="text-2xl font-bold mb-6 text-slate-900">
                            Send Us a Message
                        </h3>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* Name */}
                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Your Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none transition text-slate-900"
                                />

                            </div>

                            {/* Email */}
                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none transition text-slate-900"
                                />

                            </div>

                            {/* Phone */}
                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 9876543210"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none transition text-slate-900"
                                />

                            </div>

                            {/* Message */}
                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Your Message or Query
                                </label>

                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="I want to book a 3-day meal trial..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none transition text-slate-900 resize-none"
                                ></textarea>

                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 rounded-xl transition shadow-lg shadow-orange-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;