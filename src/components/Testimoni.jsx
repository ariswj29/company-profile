import Image from "next/image";

export default function Testimoni(){
    const testimonis = [
        {
            "id": 2,
            "image": "images.jpeg",
            "name": "Mrs. Jane Doe",
            "subtitle": "blabla",
            "description": "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur."
        },
        {
            "id": 1,
            "image": "images2.png",
            "name": "Mr John Doe",
            "subtitle": "blabla",
            "description": "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur."
        },
        {
            "id": 3,
            "image": "images3.jpeg",
            "name": "Kim Jiwon",
            "subtitle": "blabla",
            "description": "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur."
        }
    ]

    return (
        <section className="grid grid-cols-3 gap-8 p-8 px-40 my-20 justify-center items-center">
            <h2 className="font-bold text-4xl col-span-3 py-4 text-center"> Testimonial </h2>
            {testimonis.map((testimoni, i) => (
                <div key={i} className="gap-4 my-4 border-2 border-solid border-[#d6dbdc] rounded-lg">
                    <div className="grid grid-cols-4 gap-4">
                        <Image src={`/assets/${testimoni.image}`} width={500} height={500} className="h-16 w-16 mt-4 rounded-full ml-auto" alt={testimoni.title} />
                        <div className="col-span-3">
                            <h1 className="font-bold text-xl mt-6"> {testimoni.name} </h1>
                            <p className="">
                                {testimoni.subtitle}
                            </p>
                        </div>
                    </div>
                    <p className="p-4">
                        {testimoni.description}
                    </p>
                </div>
            ))}
        </section>
    );
}