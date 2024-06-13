import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { contentfulClient } from "@/helpers/contentful-client";

async function getSlug(slug) {
  try {
    const client = contentfulClient();

    const res = await client.getEntries({
      content_type: "ourServices",
      "fields.slug": slug,
    });

    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }) {
  const [services] = await getSlug(params.slug);
  const { name, fullDescription, image } = services.fields;

  return (
    <section className="max-w-screen-xl mx-auto gap-8 p-8 mb-16">
      <h3 className="font-bold text-4xl col-span-3 py-4 text-center">
        <Link href="/services" className="w-fit mx-2 text-3xl rounded-lg">
          🔙
        </Link>
        Our Services - {name}
      </h3>
      <div className="flex flex-col gap-4 rounded-lg items-center p-4">
        <Image
          src={`https:${image.fields.file.url}`}
          width={400}
          height={400}
          className="w-full"
          alt={name}
        />
        <div className="rich-text">
          {documentToReactComponents(fullDescription)}
        </div>
      </div>
    </section>
  );
}
