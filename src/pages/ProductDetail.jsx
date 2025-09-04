import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../services/api';
import { Loader } from 'lucide-react';
import Masonry from 'react-masonry-css';
import EnquiryModal from '../components/EnquiryModal';
import { ToastContainer } from 'react-toastify';

export default function ProductDetail() {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const param = useParams();
    const productId = param.id;

    useEffect(() => {
        fetchProductDetails();
        window.scrollTo(0, 0);
    }, []); 

    const fetchProductDetails = async () => {
        setLoading(true);
        try {
            const response = await getProductDetails(productId);
            setProduct(response);
        } catch (error) {
            console.error("Error fetching product details:", error);
        } finally {
            setLoading(false);
        }
    };

    // http://localhost:5000
    // const baseUrl = "http://localhost:5000"; 
    const baseUrl = "https://saturnplanetfurniture.com"; 
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader className="animate-spin w-10 h-10" />
            </div>
        );
    }

    return (
        <div className="w-full px-6 space-y-16 bg-white py-10 raleway-font max-w-7xl mx-auto">
            <ToastContainer />
            <div className="text-gray-500 text-sm md:text-md lg:text-lg font-light tracking-widest uppercase pt-5">
                Product Images
            </div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {product?.images?.map((img, index) => (
                    <img
                        key={index}
                        src={`${baseUrl}${img}`}
                        alt={`Product ${index + 1}`}
                        className="rounded-md shadow-sm w-full mb-4"
                    />
                ))}
            </Masonry>

            <div className="text-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#025876] hover:bg-[#0b9ba6] text-white px-6 py-3 rounded-sm font-semibold transition-all text-xs md:text-md lg:text-lg"
                >
                    Enquiry
                </button>
            </div>

            {/* Reusable Enquiry Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
