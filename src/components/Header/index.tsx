import Link from "next/link";
import React from "react";
import "./styles.scss";
import MenuIcon from "./components/MenuIcon";
import CloseIcon from "./components/CloseIcon";
import ScrollAnimation from "./components/ScrollAnimation";

const Index = () => {
  return (
    <header className="header" id="header">
      <ScrollAnimation />
      <div className="header-wrapper">
        <div className="header-inner-container container">
          <div className="logo-section">
            <Link href="/" title="Go to Home">
              <h1>
                <span>{"<"}</span> Symul Kabir <span>{"/>"}</span>
              </h1>
            </Link>
          </div>
          <MenuIcon />
          <div className="nav-section" id="header-nav">
            <nav>
              <div className="close-btn-container">
                <CloseIcon />
              </div>
              <ul>
                <li>
                  <Link href="/" title="Go to Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" title="Learn more about me">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/service" title="Explore our services">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/projects" title="Explore our projects">
                    Projects
                  </Link>
                </li>
                {/* <li >
                            <Link href="/blog" title="Read our latest blog posts">Blog</Link>
                        </li> */}
                <li>
                  <Link href="/contact" title="Get in touch with us">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="hire-me">
              <ul>
                <li>
                  <Link href="/contact" title="Get in touch with us">
                    Hire Me{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
