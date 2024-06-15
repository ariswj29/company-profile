import Image from "next/image";
import Link from "next/link";
import { abouts } from "@/data/data";

export default function CompanyOverview() {
  return (
    <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 p-8 items-center">
      <div className="gap-4">
        <h3 className="font-bold text-4xl py-4">Company Overview</h3>
        <p className="text-justify my-4">{abouts[0].description}</p>
        <Link href="/about-us">
          <p className="bg-[#5DA295] w-fit px-4 py-2 text-white rounded-lg">
            Read More
          </p>
        </Link>
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
