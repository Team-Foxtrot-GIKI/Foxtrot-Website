import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/partners", "Our Sponsors");

export default function Page() {
  return <Redirect to={"/partners"} label={"Our Sponsors"} />;
}
