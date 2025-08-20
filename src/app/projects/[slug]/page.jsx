import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import PageTitle from "@/components/PageTitle";
import ProjectDetails from "./components/ProjectDetails";

 
const Index = ({ params }) => { 
  const { slug } = params;

  return (
    <PublicLayout>
      <div className="about-page">
        <PageTitle
          pageTitle="Project Details"
          pageRoute="/projects"
          pageRouteLabel="Projects"
        />
        <ProjectDetails classes="extra-bg" slug={slug} />
      </div>
    </PublicLayout>
  );
};

export default Index;
