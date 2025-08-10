import React, { useState, useRef, useEffect } from 'react';
import { sendMail } from '../services/api';
import { toast } from 'react-toastify';
import AdminBtn from './buttons/AdminBtn';
import { FaTimes } from 'react-icons/fa';

export default function EnquiryModal({ isOpen, onClose }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loadingBtn, setLoadingBtn] = useState(false);

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoadingBtn(true);
        try {
            await sendMail({ name, email, phone, message, subject });
            setName(""); setEmail(""); setPhone(""); setMessage(""); setSubject("");
            toast.success("Message sent successfully!");
            onClose();
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send enquiry. Please try again later.");
        } finally {
            setLoadingBtn(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 relative animate-slideUp"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
                    <FaTimes size={20} />
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📩 Send an Enquiry</h2>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input" required />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" required />
                        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" required />
                        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="input" required />
                    </div>
                    <textarea
                        placeholder="Your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input resize-none"
                        rows="5"
                        required
                    />
                    <div className="flex justify-end gap-4 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <AdminBtn text={"Submit"} loading={loadingBtn} />
                    </div>
                </form>
            </div>
        </div>
    );
}
