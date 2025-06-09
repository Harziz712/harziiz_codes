import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const NavLink = ({ href, children, className = "" }: NavLinkProps) => (
  <Link
    href={href}
    className={`text-md font-medium text-white hover:text-gray-300 transition-colors ${className}`}
  >
    {children}
  </Link>
);
