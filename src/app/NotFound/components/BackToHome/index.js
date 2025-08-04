import React from "react";
import "./styles.scss";
import Image from "next/image";
import NotFoundImage from "@/assets/images/home/404.webp";
import Link from "next/link";

const Index = () => {
  return (
    <div className="back-to-home-section section-px">
      <div className="back-to-home-wrapper container">
        <div className="back-to-home-grid">
          <div className="description-section">
            <h1>Sorry!</h1>
            <h3>This Page is Not Found.</h3>
            <p>
              {`The page you're looking for doesn’t exist or may have been moved.
              Don’t worry — it happens to the best of us. You can head back to
              the homepage or explore other sections of the site.`}
            </p>
            <Link href="/" className="back-to-home-link d-flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" />
                <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="img-section">
            <Image src={NotFoundImage} height={100} width={100} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
