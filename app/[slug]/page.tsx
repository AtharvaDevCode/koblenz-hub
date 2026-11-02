
import { notFound, redirect } from "next/navigation";
import { links } from "@/lib/links";

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const link = links.find((item) => item.slug === slug);

  if (!link) notFound();

  redirect(link.url);
}
