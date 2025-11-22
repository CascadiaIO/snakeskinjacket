/* eslint-disable @next/next/no-img-element */

export default function LiveDesktop() {
  return (
    <div className="flex flex-col gap-8">
      <img
        src="/bgs/live/SSJ-Live-Desktop-Top.png"
        alt="Landing"
        className="max-w-full h-auto"
      />

      <div className="flex justify-center items-center">
        <button
          className="
            live-button
            w-4/6
            md:w-2/3
            lg:w-3/4
            2xl:w-2/3
            min-w-[400px]
            py-6
            text-5xl
            lg:text-6xl
            xl:text-7xl"
          style={{
            fontFamily: "Nimbus Sans Bold",
          }}>
          WATCH LIVE!
        </button>
      </div>

      <img
        src="/bgs/live/SSJ-Live-Desktop-Bottom.png"
        alt="Landing"
        className="max-w-full h-auto"
      />
    </div>
  );
}
