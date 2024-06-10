import CompanyOverview from "@/components/CompanyOverview";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Slider />
        <CompanyOverview />
        <Service />
        <Testimoni />
      </main>
    </>
  );
}
