import React, { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import DesignSection from "../components/home/DesignSection";
import Categories from "../components/home/Categories";
import EnquiryModal from "../components/EnquiryModal";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const hasShownModal = sessionStorage.getItem("enquiryShown");

        if (!hasShownModal) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
                sessionStorage.setItem("enquiryShown", "true");
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <Banner />
            <DesignSection />
            <Categories />

            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
