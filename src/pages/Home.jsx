import React from "react";
import Banner from "../components/home/Banner";
import DesignSection from "../components/home/DesignSection";
import Categories from "../components/home/Categories";

export default function Home() {
    return (
        <>
            <Banner />
            <DesignSection />
            <Categories />
        </>
    );
}