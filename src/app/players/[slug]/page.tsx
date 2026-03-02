import PlayerProfilePage from "@/Components/players/PlayerProfilePage";
import { players } from "@/data/player";
import { notFound } from "next/navigation";

export default async function PlayerDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const player = players.find((p) => p.slug === slug);
  if (!player) return notFound();

  return <PlayerProfilePage player={player} />;
}
