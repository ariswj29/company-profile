import Image from "next/image";
import Link from "next/link";

export default function CompanyOverview() {
    return (
        <section className="grid grid-cols-2 gap-4 p-20 px-40 justify-center items-center">
            <div className="gap-4">
                <h2 className="font-bold text-4xl py-8"> Company Overview </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Quisquam, voluptate, voluptates, voluptatum, quod
                    laboriosam doloremque quidem dolorem quas
                    accusantium aspernatur.
                </p>

                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Quisquam, voluptate, voluptates, voluptatum, quod
                    laboriosam doloremque quidem dolorem quas
                    accusantium aspernatur.
                </p>

                <Link href="/about">
                    <p className="bg-blue-500 w-fit px-2 py-1 text-white rounded-lg">Read More</p>
                </Link>
            </div>
            <div className="">
                <Image src="/assets/images.jpeg" width={500} height={500} className="rounded-md ml-auto" alt="Company Overview" />
            </div>
        </section>
    );
}