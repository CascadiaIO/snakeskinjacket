import LiveDesktop from "@/components/live-desktop";
import LiveMobile from "@/components/live-mobile";
import OfflineDesktop from "@/components/offline-desktop";
import OfflineMobile from "@/components/offline-mobile";

export default function Home() {
  const isLive = process.env.STREAM_LIVE === "true";
  return (
    <main className="flex min-h-screen items-center justify-center font-sans px-4 py-6 md:px-16 md:py-0">
      <div className="block md:hidden max-w-full h-auto">
        {isLive ? <LiveMobile /> : <OfflineMobile />}
      </div>
      <div className="hidden md:block">
        {isLive ? <LiveDesktop /> : <OfflineDesktop />}
      </div>
    </main>
  );
}
