import React, { useState } from 'react';
import sectionbg from "../assets/blueCommon.jpg";
import AdminBtn from '../components/buttons/AdminBtn';
import { toast, ToastContainer } from 'react-toastify';
import { sendMail } from '../services/api';

export default function Contact() {
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoadingBtn(true);
        // Here you would typically send the form data to your backend
        try {
            const response = await sendMail({ name, email, phone, message, subject });
            // Reset form fields
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setSubject("");
            toast.success("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setLoadingBtn(false);
        }
    };

    return (
        <>
            <div className="relative w-full h-[600px]" style={{ backgroundImage: `url(${sectionbg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <ToastContainer />
                <div className="absolute inset-0 bg-black/60"></div> {/* Overlay with 60% opacity */}

                {/* Your content can go here */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white forum-font">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Contact Us</h1>
                    <p className="text-lsm sm:text-md md:text-lg font-light">
                        We'd love to hear from you! Whether you're looking for custom furniture solutions,
                        interior fit-out services, or have questions about our products, our team is ready to help.
                        Reach out and let us know how we can assist you in transforming your space.
                    </p>
                </div>
            </div>

            {/* Contact Info Boxes */}
            <div className="p-6 text-gray-700 max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-6 raleway-font my-10">
                <div className="bg-gray-50 rounded-lg p-10 flex-1 flex flex-col justify-between shadow">
                    <strong className="text-lg mb-2">📍 Address:</strong>
                    <p>
                        Saturnplanet furniture llc.sp,<br />
                        Al nabbah street, sharjah, uae
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-10 flex-1 flex flex-col justify-between shadow">
                    <strong className="text-lg mb-2">📞 Phone:</strong>
                    {/* <a href="tel:+8615899568868" className="text-blue-600 hover:underline"> */}
                        +971 56 779 6927
                    {/* </a> */}
                </div>

                <div className="bg-gray-50 rounded-lg p-10 flex-1 flex flex-col justify-between shadow">
                    <strong className="text-lg mb-2">📧 Email:</strong>
                    {/* <a href="mailto:info@bokalabsystem.com" className="text-blue-600 hover:underline"> */}
                        info@bokalabsystem.com
                    {/* </a> */}
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md raleway-font mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 forum-font">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={ handleFormSubmit }>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="phone"
                            name="phone"
                            placeholder="Your Phone"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                    <AdminBtn text={"Send Message"} loading={loadingBtn} />
                </form>
            </div>
        </>
    );
}
