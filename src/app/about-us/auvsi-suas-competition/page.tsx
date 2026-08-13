import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/timeline", "AUVSI SUAS Competition");

export default function Page() {
  return <Redirect to={"/timeline"} label={"AUVSI SUAS Competition"} />;
}
