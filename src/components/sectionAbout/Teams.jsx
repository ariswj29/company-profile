"use client";

import CardTeam from "@/components/CardTeam";
import Link from "next/link";
import { useEffect, useState } from "react";
import SkeletonComponent from "../Skeleton";

export default function Teams() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const fetchData = await response.json();
        setData(fetchData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="col-span-2 py-10">
          <h2 className="font-bold text-3xl p-8"> Teams </h2>
          <div className="grid gap-8">
            <SkeletonComponent className={"px-8"} height={300} width={"full"} />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="col-span-2 py-10">
      <h2 className="font-bold text-3xl py-8"> Teams </h2>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-8">
        {data?.results?.map((item, index) => (
          <CardTeam key={index} data={item} />
        ))}
      </div>
      <div className="flex justify-center items-center py-8">
        <Link className="" href="/teams">
          <p className="bg-[#5DA295] w-fit px-4 py-2 text-white rounded-lg">
            View All Teams
          </p>
        </Link>
      </div>
    </div>
  );
}
