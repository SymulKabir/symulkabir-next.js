import React from "react";
import "./styles.scss";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify"

interface ProjectInfo {
  img: string;
  name: string;
  link?: string;
}

interface Props {
  projectInfo: ProjectInfo;
}

const Index: React.FC<Props> = ({ projectInfo }) => {
const slug = slugify(projectInfo.name, { lower: true })

  return (
    <Link href={`/projects/${slug}`} className="project-cart">
      <div className="img-section">
        {new Array(2).fill("").map((_, index) => {
          return (
            <div className={`img-bg-${index + 1}`} key={index}>
              <Image
                src={`/api/assets/images/project images/${projectInfo.img}`}
                height={100}
                width={100}
                alt=""
              />
            </div>
          );
        })}
        <div className="img-container">
          <Image
            src={`/api/assets/images/project images/${projectInfo.img}`}
            height={100}
            width={100}
            alt=""
          />
        </div>
      </div>
      <div className="des-section">
        <h2 className="title">{projectInfo.name}</h2>
        <div className="link d-flex">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <a href={projectInfo.link} target="__blank">
            {projectInfo.link || "No Link Available"}
          </a>
        </div>
      </div>
    </Link>
  );
};

export default Index;
