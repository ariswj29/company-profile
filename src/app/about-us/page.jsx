import CardTeam from "@/components/CardTeam";
import Image from "next/image";
import Link from "next/link";

export default function page(){
    const cards = [
        {
            title: "Team 1",
            name: "MR. John Doe",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
            image: "/assets/images.jpeg"
        },
        {
            title: "Team 2",
            name: "MR. Jane Doe",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
            image: "/assets/images.jpeg"
        },
        {
            title: "Team 3",
            name: "MR. John Doe",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
            image: "/assets/images.jpeg"
        },
        {
            title: "Team 4",
            name: "MR. Jane Doe",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
            image: "/assets/images.jpeg"
        },
    ]

    return (
        <section className="grid grid-cols-2 gap-8 p-8 px-40 justify-center items-center">
            <div className="gap-4">
                <h2 className="font-bold text-4xl py-8"> About Us </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Quisquam, voluptate, voluptates, voluptatum, quod
                    laboriosam doloremque quidem dolorem quas
                    accusantium aspernatur.
                </p>

                <p className="">
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
            </div>
            <div className="">
                <Image src="/assets/images.jpeg" width={500} height={500} className="rounded-md ml-auto" alt="About Us" />
            </div>

            <div className="gap-4">
                <h2 className="font-bold text-3xl py-8"> Company History </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Quisquam, voluptate, voluptates, voluptatum, quod
                    laboriosam doloremque quidem dolorem quas
                    accusantium aspernatur.
                </p>
            </div>
            <div className="gap-4">
                <h2 className="font-bold text-3xl py-8"> Culture </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Quisquam, voluptate, voluptates, voluptatum, quod
                    laboriosam doloremque quidem dolorem quas
                    accusantium aspernatur.
                </p>
            </div>

            <div className="col-span-2 py-10">
                <h2 className="font-bold text-3xl py-8"> Teams </h2>
                <div className="grid grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <CardTeam data={card} index={index} />
                    ))}
                </div>
                <div className="flex justify-center items-center py-8">
                    <Link className="" href="/teams">
                        <p className="bg-blue-500 w-fit px-2 py-1 text-white rounded-lg">View All Teams</p>
                    </Link>
                </div>
            </div>

        </section>
    )
}