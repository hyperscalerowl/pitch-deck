import navigation from "@/config/navigation.json";

type NavigationLink = {
  href: string;
  label: string;
};

type NavigationConfig = {
  navLinks: NavigationLink[];
  footerLinks: NavigationLink[];
};

const { navLinks, footerLinks } = navigation as NavigationConfig;

export { navLinks, footerLinks };
