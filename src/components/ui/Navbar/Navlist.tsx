import Link from "next/link";

const navitems = [
  {
    title: "Products",
    to: "/#products",
  },
  {
    title: "Solutions",
    to: "/#solutions",
  },
  {
    title: "Services",
    to: "/#services",
  },
  {
    title: "Configure",
    to: "/#configure",
  },
];

export const Navlist = () => {
  return (
    <nav className="max-[700px]:hidden">
      <ul className="list-none flex gap-10">
        {navitems.map((item) => (
          <li key={item.title} className="font-medium">
            <Link href={item.to} aria-label={item.title}>
              <span aria-hidden>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
