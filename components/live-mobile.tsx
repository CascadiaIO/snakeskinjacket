/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function LiveMobile() {
  return (
    <div className="flex flex-col w-full gap-8">
      <img
        src="/bgs/live/SSJ-Live-Mobile.png"
        alt="Snakeskin Jacket Live"
        className="max-w-full h-auto"
      />

      <div className="flex w-full justify-center items-center">
        <Link
          href="https://stream.snakeskinjacket.live"
          className="
            live-button
            w-5/6
            py-4
            text-4xl
          ">
          WATCH LIVE!
        </Link>
      </div>
    </div>
  );
}
