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
      className={`relative w-full h-52 cursor-pointer`}
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
          width={1000}
          height={1000}
          className={`${
            isFlipped
              ? "w-24 h-24 rounded-full"
              : "h-52 w-full object-cover rounded-md ml-auto"
          }`}
          alt="Team 1"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#bfddd2] bg-opacity-50 p-2">
          <p className="font-semibold">{!isFlipped && data.name.title + "."}</p>
          <h3
            className={`${!isFlipped ? "text-xl" : "text-lg"} font-extrabold`}
          >
            {data.name.first} {data.name.last}
          </h3>
          {isFlipped && (
            <>
              <p className="text-xs">
                <FaMapLocation className="inline" />{" "}
                {data.location.street.number} {data.location.street.name}
                {", "}
                {data.location.city}
                {", "} {data.location.state}
              </p>
              <p className="text-xs">
                <FaEnvelope className="inline" />{" "}
                {data.email
                  .slice(-18)
                  .replace(".", "")
                  .replace("@examplecom", "@gmail.com")}
              </p>
              <p className="text-xs">
                <FaPhone className="inline" /> {data.phone}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
