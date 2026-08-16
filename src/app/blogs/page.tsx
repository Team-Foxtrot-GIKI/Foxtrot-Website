import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/intelligence", "Blogs");

export default function Page() {
  return <Redirect to={"/intelligence"} label={"Blogs"} />;
}
