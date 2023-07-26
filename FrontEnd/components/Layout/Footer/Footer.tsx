import React from "react";
import Link from "next/link";
import style from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <div className={style.footerContainer}>
      <footer className={style.footer}>
        <div className={style.net}>
          <h4>Linkedin</h4>
          <Link
            href="https://www.linkedin.com/in/mauricio-javier-carbal-martinez-2b7080201/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>
        <div className={style.net}>
          <h4>GitHub</h4>
          <Link href="https://github.com/Carbal23" target="_blank" >
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
        <div className={style.net}>
          <h4>Twitter</h4>
          <Link href="https://twitter.com/mcarbal23" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </div>
        <div className={style.buttonInfo}>
          <p>
            © 2023 Prueba Full stack developer - Double V Patner. Todos los
            derechos reservados. Creado por Mauricio Carbal Full stack
            Developer.{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
