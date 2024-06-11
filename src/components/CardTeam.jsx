"use client";

import Image from "next/image";
import { useState } from "react";

export default function CardTeam({data, index}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div 
            className={`relative w-full h-80 cursor-pointer`}
            onClick={handleFlip}
            key={index}
        >
            <div className={`w-full h-full ${isFlipped ? 'grid bg-[#d6dbdc] justify-items-center' : ''} `}>
                <Image src={data.image} width={500} height={500} className={`${isFlipped ? 'w-32 h-28 rounded-full' : 'h-80 w-full object-cover rounded-md ml-auto'}`} alt="Team 1" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#d6dbdc] bg-opacity-50 p-4">
                    <p className="font-semibold"> {data.title} </p>
                    <h3 className="text-2xl font-extrabold"> {data.name} </h3>
                    {isFlipped && <p className="text-sm"> {data.description} </p>}
                </div>
            </div>
        </div>
    );
}