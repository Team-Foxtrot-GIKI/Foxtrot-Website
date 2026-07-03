import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Layout16 } from "./components/Layout16";
import { Timeline21 } from "./components/Timeline21";
import { Stats55 } from "./components/Stats55";
import { Cta57 } from "./components/Cta57";
import { Footer4 } from "./components/Footer4";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Layout16 />
      <Timeline21 />
      <Stats55 />
      <Cta57 />
      <Footer4 />
    </div>
  );
}
