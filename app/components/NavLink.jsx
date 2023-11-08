import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-accent text-4xl sm:text-xl rounded md:p-0 hover:text-highlight "
    >
      {title}
    </Link>
  );
};

export default NavLink;
