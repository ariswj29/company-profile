import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function CardAbout({key, data}) {
    const { aboutId, name, description } = data.fields;
    return (
        aboutId == "company-history" || aboutId == "company-culture" ? (
            <div className="gap-4" key={key}>
                <h2 className="font-bold text-3xl py-8"> {name} </h2>
                <div className="rich-text">
                    {documentToReactComponents(description)}
                </div>
            </div>
        ) :  null
    );
}