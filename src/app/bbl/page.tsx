import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default function BblRedirectPage() {
  redirect("https://github.com/neural-processing-lab/the-brains-bitter-lesson");
}
