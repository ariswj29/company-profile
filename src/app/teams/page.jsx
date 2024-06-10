import CardTeam from "@/components/CardTeam";

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
        {
            title: "Team 5",
            name: "MR. John Doe",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
            image: "/assets/images.jpeg"
        },
        {
            title: "Team 6",
            name: "MR. Jane Doe",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
            image: "/assets/images.jpeg"
        },
        {
            title: "Team 7",
            name: "MR. John Doe",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
            image: "/assets/images.jpeg"
        },
        {
            title: "Team 8",
            name: "MR. Jane Doe",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate, voluptates, voluptatum, quod laboriosam doloremque quidem dolorem quas accusantium aspernatur.",
            image: "/assets/images.jpeg"
        }
    ]

    return (
        <section className="grid gap-8 p-8 px-40 mb-20 justify-center items-center">
            <h2 className="font-bold text-4xl py-8"> Teams </h2>
            <div className="grid grid-cols-4 gap-8">
                {cards.map((data, index) => (
                    <CardTeam data={data}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}