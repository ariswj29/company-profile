import CardService from "@/components/CardService";
import { contentfulClient } from "@/helpers/contentful-client";
import { createClient } from "contentful";

async function getService() {
  try {
    const client = contentfulClient();

    const res = await client.getEntries({ content_type: "ourServices" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page() {
  const services = await getService();

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-1 max-w-screen-xl mx-auto gap-8 p-8 mb-16">
      <h3 className="font-bold text-4xl md:col-span-3 py-4 text-center">
        {" "}
        Our Services{" "}
      </h3>
      {services.map((service) => (
        <CardService key={service.sys.id} service={service} />
      ))}
    </section>
  );
}
