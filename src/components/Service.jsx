import Image from "next/image";
import Link from "next/link";

export default function Service() {
    const services = [
        {
            "id": 2,
            "image": "images.jpeg",
            "title": "blabla",
            "description": "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur."
        },
        {
            "id": 1,
            "image": "images2.png",
            "title": "blabla",
            "description": "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur."
        },
        {
            "id": 3,
            "image": "images3.jpeg",
            "title": "blabla",
            "description": "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur."
        }
    ]

    return (
        <section className="grid grid-cols-3 gap-8 p-8 px-40 justify-center items-center">
            <h2 className="font-bold text-4xl col-span-3 py-4 text-center"> Our Services </h2>
            {services.map((service, i) => (
                <div key={i} className="gap-4 my-4 bg-[#d6dbdc] rounded-lg">
                    <Image src={`/assets/${service.image}`} width={500} height={500} className="h-52 rounded-md ml-auto" alt={service.title} />
                    <h1 className="font-bold text-2xl px-4 pt-4 "> {service.title} </h1>
                    <p className="p-4">
                        {service.description}
                    </p>
                </div>
            ))}
            <Link className="col-span-3 justify-self-center" href="/products">
                <p className="bg-blue-500 w-fit px-2 py-1 text-white rounded-lg ">Read More</p>
            </Link>
        </section>
    );
}