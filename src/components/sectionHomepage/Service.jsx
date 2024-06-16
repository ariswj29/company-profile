import { createClient } from "contentful";
import Link from "next/link";
import CardService from "../CardService";
import { contentfulClient } from "@/helpers/contentful-client";
import ButtonLink from "../ButtonLink";

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
    <section className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 p-8">
      <h3 className="font-bold text-4xl md:col-span-3 py-4 text-center">
        Our Services
      </h3>
      {services.map((service) => (
        <CardService key={service.sys.id} service={service} />
      ))}
      <ButtonLink
        style={"md:col-span-3 justify-self-center"}
        link={"/services"}
        title={"Read More"}
      />
    </section>
  );
}
