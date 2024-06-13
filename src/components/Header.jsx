"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbars } from "@/data/data";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="grid grid-cols-3 px-40 bg-[#bfddd2] sticky top-0 z-50">
      <div className="col-span-2 py-2">
        <Link href="/">
          <Image
            src="/assets/logo-with-tagline.png"
            alt="RizzCorps"
            width={150}
            height={25}
          />
        </Link>
      </div>
      <div className="col-span-1 py-6">
        <nav>
          <ul className="grid grid-cols-5 gap-4">
            {navbars.map((navbar) => (
              <li key={navbar.id} className="text-center">
                <Link
                  href={navbar.link}
                  className={pathname === navbar.link ? "active" : "nav-link"}
                >
                  {navbar.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
