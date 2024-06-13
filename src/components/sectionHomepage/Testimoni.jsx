import { contentfulClient } from "@/helpers/contentful-client";
import { createClient } from "contentful";
import Image from "next/image";

async function getTestimoni() {
  try {
    const client = contentfulClient();

    const res = await client.getEntries({ content_type: "testimoni" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Testimoni() {
  const testimonis = await getTestimoni();

  return (
    <section className="grid grid-cols-3 gap-8 p-8">
      <h3 className="font-bold text-4xl col-span-3 py-4 text-center">
        {" "}
        Testimonial{" "}
      </h3>
      {testimonis.map((testimoni) => (
        <div
          key={testimoni.sys.id}
          className="gap-4 my-4 border-2 border-solid border-[#bfddd2] rounded-lg"
        >
          <div className="grid grid-cols-4 gap-4">
            <Image
              src={`https:${testimoni.fields.image.fields.file.url}`}
              width={500}
              height={500}
              className="h-16 w-16 mt-4 rounded-full object-cover ml-auto"
              alt={testimoni.fields.name}
            />
            <div className="col-span-3">
              <h4 className="font-bold text-xl mt-6">
                {" "}
                {testimoni.fields.name}{" "}
              </h4>
              <p className="">{testimoni.fields.title}</p>
            </div>
          </div>
          <p className="p-4 text-justify">"{testimoni.fields.description}"</p>
        </div>
      ))}
    </section>
  );
}
