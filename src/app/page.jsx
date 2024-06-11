import CompanyOverview from "@/components/sectionHomepage/CompanyOverview";
import Service from "@/components/sectionHomepage/Service";
import Slider from "@/components/sectionHomepage/Slider";
import Testimoni from "@/components/sectionHomepage/Testimoni";

export default function Home() {
  return (
    <>
      <Slider />
      <main className="max-w-screen-xl mx-auto">
        <CompanyOverview />
        <Service />
        <Testimoni />
      </main>
    </>
  );
}
