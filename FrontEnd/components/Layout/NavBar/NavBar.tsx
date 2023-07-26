import react from "react";
import style from "./navBar.module.css";
import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <nav className={style.nav}>
      <Link href="/">
        <i className="fa-solid fa-house"></i>
      </Link>

      <h1>Prueba tecnica Full Double V Patners</h1>
      <Link href="/favoriteList">
        <i className="fa-solid fa-star"></i>
      </Link>
    </nav>
  );
};

export default NavBar;
