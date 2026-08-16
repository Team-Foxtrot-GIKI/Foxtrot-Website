import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/timeline", "IMechE UAS Challenge");

export default function Page() {
  return <Redirect to={"/timeline"} label={"IMechE UAS Challenge"} />;
}
