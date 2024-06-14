import { navbars, socialMedia } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#bfddd2] p-8">
      <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-4 max-w-screen-xl mx-auto">
        <div className="col-span-2 px-6">
          <Image
            src="/assets/logo.png"
            alt="RizzCorps"
            width={150}
            height={25}
          />
          <p className="mt-2 text-justify">
            RizzCorps is a dynamic and innovative web development company
            dedicated to crafting top-notch digital experiences. Founded with a
            passion for technology and a commitment to excellence, we specialize
            in creating customized websites that not only meet but exceed our
            clients' expectations.
          </p>
        </div>
        <div className="px-6">
          <h3 className="text-2xl font-bold">Menu</h3>
          <ul className="mt-2">
            {navbars.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="nav-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 px-6">
          <h3 className="text-2xl font-bold">Information Contact</h3>
          <p className="mt-2">
            Address: Jl Dipatiukur 123, Kota Bandung, Jawa Barat, Indonesia
          </p>
          <ul className="flex gap-2">
            {socialMedia.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="nav-link">
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 RizzCorps. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
