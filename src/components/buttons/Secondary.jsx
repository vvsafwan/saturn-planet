import React from 'react'

export default function Secondary({ text }) {
    return (
        <button className="border border-white hover:bg-[#cdcdcd] text-white px-6 py-3 rounded-sm font-semibold transition-all raleway-font text-xs md:text-md lg:text-lg">
            {text}
        </button>
    )
}
