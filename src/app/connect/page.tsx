import ConnectClient from "@/Components/connectClient";
import { Suspense } from "react";

export default function ConnectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ConnectClient />
    </Suspense>
  );
}
