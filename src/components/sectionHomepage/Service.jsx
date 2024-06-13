import { createClient } from "contentful";
import Link from "next/link";
import CardService from "../CardService";
import { contentfulClient } from "@/helpers/contentful-client";

async function getService() {
  try {
    const client = contentfulClient();

    const res = await client.getEntries({ content_type: "ourServices" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Service() {
  const services = await getService();

  return (
    <section className="grid grid-cols-3 gap-8 p-8">
      <h3 className="font-bold text-4xl col-span-3 py-4 text-center">
        {" "}
        Our Services{" "}
      </h3>
      {services.map((service) => (
        <CardService key={service.sys.id} service={service} />
      ))}
      <Link className="col-span-3 justify-self-center" href="/services">
        <p className="bg-[#5DA295] w-fit px-4 py-2 text-white rounded-lg">
          Read More
        </p>
      </Link>
    </section>
  );
}