import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Header64 } from "./components/Header64";
import { Portfolio14 } from "./components/Portfolio14";
import { ProjectsShowcase } from "./components/ProjectsShowcase";
// import { Cta57 } from "./components/Cta57";
import { Footer4 } from "./components/Footer4";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header64 />
      <Portfolio14 />
      <ProjectsShowcase />
      {/* <Cta57 /> */}
      <Footer4 />
    </div>
  );
}