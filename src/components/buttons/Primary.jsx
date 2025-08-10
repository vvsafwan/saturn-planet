import React from 'react'

export default function Primary({ text }) {
    return (
        <button className="bg-[#0b9ba6] hover:bg-[#025876] text-white px-6 py-3 rounded-sm font-semibold transition-all raleway-font text-xs md:text-md lg:text-lg">
            {text}
        </button>
    )
}
