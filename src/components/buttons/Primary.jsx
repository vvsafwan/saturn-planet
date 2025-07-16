import React from 'react'

export default function Primary({ text }) {
    return (
        <button className="bg-[#918155] hover:bg-[#77683f] text-white px-6 py-3 rounded-sm font-semibold transition-all raleway-font">
            {text}
        </button>
    )
}
