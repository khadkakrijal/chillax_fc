import TeamPageClient from "@/Components/TeamPageClient";
import { players } from "@/data/player";

export default function TeamPage() {
  return <TeamPageClient players={players} />;
}
