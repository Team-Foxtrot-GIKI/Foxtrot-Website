import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/comms", "Contact Us");

export default function Page() {
  return <Redirect to={"/comms"} label={"Contact Us"} />;
}
