import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/timeline", "About Us");

export default function Page() {
  return <Redirect to={"/timeline"} label={"About Us"} />;
}
