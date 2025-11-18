import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center font-sans pt-12">
      <main className="flex w-full max-w-3xl flex-col items-center justify-start py-2 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-[-2.5rem]">
          <div
            className="relative w-full flex items-center justify-center"
            style={{ height: "10rem" }}>
            <h1
              className="absolute inset-0 text-9xl font-extrabold text-red-500 select-none"
              style={{ top: 0, left: 0 }}>
              Snake Skin Jacket
            </h1>
            <h1
              className="absolute inset-0 text-9xl font-extrabold text-orange-500 select-none"
              style={{ top: 8, left: 0 }}>
              Snake Skin Jacket
            </h1>
            <h1
              className="absolute inset-0 text-9xl font-extrabold text-yellow-400 select-none"
              style={{ top: 16, left: 0 }}>
              Snake Skin Jacket
            </h1>
            <h1
              className="absolute inset-0 text-9xl font-extrabold text-green-500 select-none"
              style={{ top: 24, left: 0 }}>
              Snake Skin Jacket
            </h1>
            <h1
              className="absolute inset-0 text-9xl font-extrabold text-blue-600 select-none"
              style={{ top: 32, left: 0 }}>
              Snake Skin Jacket
            </h1>
            <h1
              className="absolute inset-0 text-9xl font-extrabold text-purple-600 select-none"
              style={{ top: 40, left: 0 }}>
              Snake Skin Jacket
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
