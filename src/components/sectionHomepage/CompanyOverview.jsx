"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CompanyOverview() {
    const pathname = usePathname();

    return (
        <section className={`grid grid-cols-2 gap-8 p-8 items-center ${pathname == "/" ? '' : 'max-w-screen-xl mx-auto'}`}>
            <div className="gap-4">
                <h3 className="font-bold text-4xl py-4"> {pathname == "/" ? "Company Overview" : "About Us"} </h3>
                <p className="text-justify my-4">
                RizzCorps is a dynamic and innovative web development company dedicated to crafting top-notch digital experiences. Founded with a passion for technology and a commitment to excellence, we specialize in creating customized websites that not only meet but exceed our clients' expectations. Our team of skilled developers, designers, and strategists work collaboratively to deliver seamless, user-friendly, and visually stunning websites tailored to your unique business needs.
                </p>
                {pathname == "/about-us" && (
                <>
                    <p className="text-justify my-4">
                    At RizzCorps, we believe that a strong online presence is crucial in today's digital landscape. We pride ourselves on our ability to transform ideas into reality, offering comprehensive web solutions that drive engagement and growth. From initial concept to final launch, our process is transparent, efficient, and focused on delivering results that matter.
                    </p>
                    
                    <p className="text-justify my-4">
                    Whether you're a startup looking to establish your brand or an established business aiming to enhance your digital footprint, RizzCorps is your trusted partner in achieving your online goals. Join us on a journey to innovate, create, and elevate your web presence to new heights.
                    </p>
                </>
                )}

                {pathname == "/" && (
                    <Link href="/about-us">
                        <p className="bg-blue-500 w-fit px-4 py-2 text-white rounded-lg">Read More</p>
                    </Link>
                )}
            </div>
            <div className="">
                <Image src="/assets/teams.jpg" width={500} height={500} className="rounded-md object-cover ml-auto" alt="Company Overview" />
            </div>
        </section>
    );
}