import CompanyOverview from "@/components/CompanyOverview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Slider />
        <CompanyOverview />
        <Service />
        <Testimoni />
        <Footer />
      </main>
    </>
  );
}
