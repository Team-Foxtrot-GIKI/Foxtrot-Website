import Redirect, { redirectMetadata } from "@/components/Redirect";

export const metadata = redirectMetadata("/crew#leadership", "Team Founder");

export default function Page() {
  return <Redirect to={"/crew#leadership"} label={"Team Founder"} />;
}
