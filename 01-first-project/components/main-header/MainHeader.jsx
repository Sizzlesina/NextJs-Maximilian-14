"use client";

import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image
            src={logoImg.src}
            alt='A plate with food on it'
            priority
            width={500}
            height={500}
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
