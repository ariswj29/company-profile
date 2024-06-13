"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="grid grid-cols-3 px-20 bg-[#bfddd2] sticky top-0 z-50">
      <div className="col-span-2 py-2">
        <Image
          src="/assets/logo-with-tagline.png"
          alt="RizzCorps"
          width={150}
          height={25}
        />
      </div>
      <div className="col-span-1 py-6">
        <nav>
          <ul className="grid grid-cols-4 gap-4">
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active" : "nav-link"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={pathname === "/about-us" ? "active" : "nav-link"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathname === "/services" ? "active" : "nav-link"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                className={pathname === "/teams" ? "active" : "nav-link"}
              >
                Teams
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
