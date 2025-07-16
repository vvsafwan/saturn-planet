import React from 'react'

export default function Secondary({ text }) {
    return (
        <button className="border border-[#77683f] hover:bg-[#f5f0dc] text-[#77683f] px-6 py-3 rounded-sm font-semibold transition-all raleway-font">
            {text}
        </button>
    )
}
