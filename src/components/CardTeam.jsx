"use client";

import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";

export default function CardTeam({ data, index }) {
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
      <div
        className={`w-full h-full ${
          isFlipped ? "grid bg-[#bfddd2] justify-items-center" : ""
        } `}
      >
        <Image
          src={data.picture.large}
          width={500}
          height={500}
          className={`${
            isFlipped
              ? "w-32 h-32 rounded-full"
              : "h-80 w-full object-cover rounded-md ml-auto"
          }`}
          alt="Team 1"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#bfddd2] bg-opacity-50 p-4">
          <p className="font-semibold"> {data.name.title}. </p>
          <h3 className="text-2xl font-extrabold">
            {" "}
            {data.name.first} {data.name.last}{" "}
          </h3>
          {isFlipped && (
            <>
              <p className="text-sm">
                <FaMapLocation className="inline" />{" "}
                {data.location.street.number} {data.location.street.name},{" "}
                {data.location.city}, {data.location.state},{" "}
                {data.location.country}{" "}
              </p>
              <p className="text-sm">
                {" "}
                <FaEnvelope className="inline" /> {data.email}{" "}
              </p>
              <p className="text-sm">
                {" "}
                <FaPhone className="inline" /> {data.phone}{" "}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
