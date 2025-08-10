import React, { useState } from "react";
import AdminBtn from "../../components/buttons/AdminBtn";
import Sidebar from "../../components/Sidebar";
import { toast, ToastContainer } from "react-toastify";
import { postProducts } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [category, setCategory] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [loadingBtn, setLoadingBtn] = useState(false);
    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
        const previewUrls = files.map((file) => URL.createObjectURL(file));
        setPreviews(previewUrls);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!category || selectedFiles.length === 0) {
            alert("Please select a category and upload at least one image.");
            return;
        }

        const formData = new FormData();
        formData.append("category", category);
        selectedFiles.forEach((file) => {
            formData.append("images", file);
        });

        console.log("Submitting", { category, selectedFiles });

        setLoadingBtn(true);

        try {
            const response = await postProducts(formData);
            console.log("Response:", response);
            toast.success("Submission successful!");
            setTimeout(() => {
                navigate('/admin/products');
            }, 1000);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Submission failed!");
        } finally {
            setLoadingBtn(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen bg-gray-100 p-6 py-20">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Dashboard</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Category Dropdown */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Category
                            </label>
                            <select
                                value={category}
                                onChange={handleCategoryChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="laboratory">Laboratory</option>
                                <option value="office">Office</option>
                                <option value="school">School</option>
                                <option value="interior">Interior</option>
                            </select>
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Upload Product Images
                            </label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>

                        {/* Image Previews */}
                        {previews.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                {previews.map((src, index) => (
                                    <div key={index} className="border rounded-lg overflow-hidden">
                                        <img src={src} alt={`preview-${index}`} className="w-full h-32 object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Submit Button */}
                        <AdminBtn text="Submit" loading={loadingBtn} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
