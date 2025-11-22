export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center font-sans px-4 py-6 md:px-16 md:py-0">
      {/* Mobile foreground image */}
      <img
        src="/bgs/Landing_Mobile.png"
        alt="Landing"
        className="block md:hidden max-w-full h-auto"
      />
      {/* Desktop foreground image */}
      <img
        src="/bgs/Landing_Desktop.png"
        alt="Landing"
        className="hidden md:block max-w-3/4 xl:max-w-3/5 h-auto md:max-h-screen object-contain"
      />
    </main>
  );
}
