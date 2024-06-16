import Image from "next/image";
import Link from "next/link";
import { abouts } from "@/data/data";
import ButtonLink from "../ButtonLink";

export default function CompanyOverview() {
  return (
    <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 p-8 items-center">
      <div className="gap-4">
        <h3 className="font-bold text-4xl py-4">Company Overview</h3>
        <p className="text-justify my-4">{abouts[0].description}</p>
        <ButtonLink link={"/about-us"} title="Read More" />
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
