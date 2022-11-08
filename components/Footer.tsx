import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 pt-8 pb-16 px-6">
      <div className="mx-auto max-w-6xl">
        <p>
          Copyright &copy; {year}{" "}
          <Link
            href="https://determinate.systems"
            className="hover:text-blue-500"
          >
            Determinate Systems
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
