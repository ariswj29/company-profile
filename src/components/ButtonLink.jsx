import Link from "next/link";

export default function ButtonLink({ title, link, style }) {
  return (
    <Link className={style || ""} href={link || ""}>
      <p className="bg-[#5DA295] hover:bg-[#51877d] w-fit px-4 py-2 text-white rounded-lg">
        {title || "Button"}
      </p>
    </Link>
  );
}
