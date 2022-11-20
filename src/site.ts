export type NavLink = {
  text: string;
  href: string;
};

export type Site = {
  title: string;
  description: string;
  languageCode: string;
  navbarLinks: NavLink[];
};

const site: Site = {
  title: "Zero to Nix",
  description:
    "An unofficial and opinionated guide to getting started with Nix",
  languageCode: "en",
  navbarLinks: [
    { text: "Quick start", href: "/start" },
    { text: "Concepts", href: "/concepts" },
  ],
};

export default site;
