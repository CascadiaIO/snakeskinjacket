import LiveDesktop from "@/components/live-desktop";
import LiveMobile from "@/components/live-mobile";
import OfflineDesktop from "@/components/offline-desktop";
import OfflineMobile from "@/components/offline-mobile";

export default function Home() {
  const isLive = process.env.STREAM_LIVE === "true";
  return (
    <main className="flex min-h-screen items-center justify-center font-sans px-4 py-6 md:px-16 md:py-0">
      {/* Mobile foreground image */}
      <div className="block md:hidden max-w-full h-auto">
        {isLive ? <LiveMobile /> : <OfflineMobile />}
      </div>
      {/* Desktop foreground image */}
      {/* <div className="hidden md:block max-w-3/4 xl:max-w-3/5 h-auto md:max-h-screen object-contain border-4 border-black"> */}
      <div className="hidden md:block">
        {isLive ? <LiveDesktop /> : <OfflineDesktop />}
      </div>
    </main>
  );
}
