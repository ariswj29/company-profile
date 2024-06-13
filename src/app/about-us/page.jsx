import CardAbout from "@/components/CardAbout";
import CardTeam from "@/components/CardTeam";
import CompanyOverview from "@/components/sectionHomepage/CompanyOverview";
import { contentfulClient } from "@/helpers/contentful-client";
import { createClient } from "contentful";
import Link from "next/link";

async function getAbout() {
  try {
    const client = contentfulClient();

    const res = await client.getEntries({ content_type: "aboutUs" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function page() {
  const abouts = await getAbout();
  const cards = [
    {
      title: "Team 1",
      name: "MR. John Doe",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
      image: "/assets/images.jpeg",
    },
    {
      title: "Team 2",
      name: "MR. Jane Doe",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
      image: "/assets/images.jpeg",
    },
    {
      title: "Team 3",
      name: "MR. John Doe",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
      image: "/assets/images.jpeg",
    },
    {
      title: "Team 4",
      name: "MR. Jane Doe",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
      image: "/assets/images.jpeg",
    },
  ];

  return (
    <>
      <CompanyOverview />
      <section className="grid grid-cols-2 gap-8 p-8 max-w-screen-xl mx-auto items-center">
        {abouts.map((about) => (
          <CardAbout key={about.sys.id} data={about} />
        ))}
        <div className="col-span-2 py-10">
          <h2 className="font-bold text-3xl py-8"> Teams </h2>
          <div className="grid grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <CardTeam data={card} index={index} />
            ))}
          </div>
          <div className="flex justify-center items-center py-8">
            <Link className="" href="/teams">
              <p className="bg-[#5DA295] w-fit px-4 py-2 text-white rounded-lg">
                View All Teams
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
