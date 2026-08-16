import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/crew", "Our Team");

export default function Page() {
  return <Redirect to={"/crew"} label={"Our Team"} />;
}
