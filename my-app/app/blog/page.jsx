import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Header64 } from "./components/Header64";
import { BlogPostsSection } from "./components/BlogPostsSection";
import { Footer4 } from "./components/Footer4";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header64 />
      <BlogPostsSection />  
      <Footer4 />
    </div>
  );
}
