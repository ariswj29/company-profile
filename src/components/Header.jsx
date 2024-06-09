"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="grid grid-cols-3 py-6 px-12 bg-inherit sticky top-0 z-50">
            <div className="col-span-2">
                <h1>RizzCorps</h1>
            </div>
            <div className="col-span-1">
                <nav>
                    <ul className="grid grid-cols-4 gap-4">
                        <li>
                            <Link href="/" className={pathname === "/" ? "active" : "nav-link" }>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={pathname === "/about" ? "active" : "nav-link" }>About</Link>
                        </li>
                        <li>
                            <Link href="/product" className={pathname === "/product" ? "active" : "nav-link" }>Product</Link>
                        </li>
                        <li>
                            <Link href="/teams" className={pathname === "/teams" ? "active" : "nav-link" }>Teams</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}