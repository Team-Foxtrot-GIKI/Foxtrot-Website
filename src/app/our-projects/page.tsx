import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/aircraft", "Our Projects");

export default function Page() {
  return <Redirect to={"/aircraft"} label={"Our Projects"} />;
}
