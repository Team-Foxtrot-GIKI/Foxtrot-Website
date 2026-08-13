import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/archive/media", "Media Gallery");

export default function Page() {
  return <Redirect to={"/archive/media"} label={"Media Gallery"} />;
}
