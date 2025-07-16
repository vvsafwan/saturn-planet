import React from 'react'
import background from "../../assets/home/homebanner.jpg"; 
import Primary from "../buttons/primary";
import Secondary from "../buttons/Secondary";

export default function Banner() {
    return (
        <div
            className={`bg-cover bg-center flex items-center justify-center px-4 min-h-screen lg:min-h-[70vh]`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="text-center text-white">
                <h4 className="text-sm md:text-base tracking-widest text-[#918155] font-medium mb-2 raleway-font">
                    ELEGANT SPACES
                </h4>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-light mb-4 drop-shadow forum-font">
                    UNLOCK YOUR DREAM HOME TODAY
                </h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-600 raleway-font pb-10">
                    Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life.
                </p>
                <div className="flex justify-center gap-3">
                    <div>
                        <Primary text={"GET STARTED"} />
                    </div>
                    <div>
                        <Secondary text={"LEARN MORE"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
