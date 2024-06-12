import CardService from "@/components/CardService";
import { createClient } from "contentful";

async function getService(){
  try{
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: "ourServices" });
    console.log(res.items);
    return res.items;
  }catch(error){
    console.error(error);
  }
}

export default async function Page() {
    const services = await getService();

    return (
        <section className="grid grid-cols-3 max-w-screen-xl mx-auto gap-8 p-8 mb-16">
            <h3 className="font-bold text-4xl col-span-3 py-4 text-center"> Our Services </h3>
            {services.map((service) => (
                <CardService key={service.sys.id} service={service} />
            ))}
        </section>
    );
}