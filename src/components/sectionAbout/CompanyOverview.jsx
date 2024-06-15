import Image from "next/image";
import { abouts } from "@/data/data";

export default function CompanyOverview() {
  return (
    <section className="grid md:grid-cols-2 sm:grid-cols-1 max-w-screen-xl mx-auto gap-8 p-8 items-center">
      <div className="gap-4">
        <h3 className="font-bold text-4xl py-4">About Us</h3>
        {abouts.map((item, index) => (
          <p key={index} className="text-justify my-4">
            {item.description}
          </p>
        ))}
      </div>
      <div className="">
        <Image
          src="/assets/teams.jpg"
          width={500}
          height={500}
          className="rounded-md object-cover ml-auto"
          alt="Company Overview"
        />
      </div>
    </section>
  );
}
