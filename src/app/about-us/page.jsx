import CardAbout from "@/components/CardAbout";
import CardTeam from "@/components/CardTeam";
import Teams from "@/components/sectionAbout/Teams";
import CompanyOverview from "@/components/sectionHomepage/CompanyOverview";
import { contentfulClient } from "@/helpers/contentful-client";

async function getAbout() {
  try {
    const client = contentfulClient();

    const res = await client.getEntries({ content_type: "aboutUs" });
    return res.items;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function HomePage() {
  const abouts = await getAbout();

  return (
    <>
      <CompanyOverview />
      <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 p-8 max-w-screen-xl mx-auto items-center">
        {abouts.map((about) => (
          <CardAbout key={about.sys.id} data={about} />
        ))}
        <Teams />
      </section>
    </>
  );
}
