"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/main-header/nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${styles.link} ${
        path.startsWith(href) ? styles.active : undefined
      }`}
    >
      {children}
    </Link>
  );
}
