"use client";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`;
  return (
    <Link className={active ? "underline underline-offset-4" : "hover:underline underline-offset-4"} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
