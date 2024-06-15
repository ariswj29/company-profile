"use client";

import CardTeam from "@/components/CardTeam";
import SkeletonComponent from "@/components/Skeleton";
import { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://randomuser.me/api/?results=15");
        const fetchData = await response.json();
        setData(fetchData);
        console.log("fetchData", fetchData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    console.log("data", data);
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="col-span-2 py-10 max-w-screen-xl mx-auto items-center">
          <h2 className="font-bold text-4xl p-8"> Teams </h2>
          <div className="grid gap-8">
            <SkeletonComponent className={"px-8"} height={300} width={"full"} />
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="grid gap-8 p-8 mb-20 max-w-screen-xl mx-auto items-center">
      <h2 className="font-bold text-4xl py-8"> Teams </h2>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-8">
        {data?.results?.map((item, index) => (
          <CardTeam data={item} index={index} />
        ))}
      </div>
    </section>
  );
}
