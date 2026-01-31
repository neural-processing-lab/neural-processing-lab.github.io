import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default function MegxlRedirectPage() {
  redirect("https://github.com/neural-processing-lab/MEG-XL");
}