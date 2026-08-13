import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/comms#press", "Publications");

export default function Page() {
  return <Redirect to={"/comms#press"} label={"Publications"} />;
}
