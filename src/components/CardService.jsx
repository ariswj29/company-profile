"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonLink from "./ButtonLink";

export default function CardService({ service, key }) {
  const { name, description, icon, slug } = service.fields;
  const pathname = usePathname();

  return (
    <div
      key={key}
      className="flex flex-col gap-4 bg-[#bfddd2] rounded-lg items-center p-4"
    >
      <Image
        src={`https:${icon.fields.file.url}`}
        width={100}
        height={100}
        className="h-24 w-24 rounded-full"
        alt={name}
      />
      <h4 className="font-bold text-2xl"> {name} </h4>
      <p className="text-justify">{description}</p>
      {pathname == "/services" && (
        <ButtonLink
          style={"col-span-3 justify-self-center"}
          link={`/services/${service.fields.slug}`}
          title="Read More"
        />
      )}
    </div>
  );
}
