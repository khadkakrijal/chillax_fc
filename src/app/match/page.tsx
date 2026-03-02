import MatchDaysSection from "@/Components/MatchDaysSection";
import { matchDays } from "@/data/matchDays";

export default function MatchesPage() {
  return <MatchDaysSection items={matchDays} />;
}