import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#180407] px-4 py-10 sm:px-8"
    >
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 blur-xl"
        style={{
          backgroundImage: "url('/images/luffy-dashboard.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main dashboard */}
      <section className="relative z-10 min-h-[650px] w-full max-w-7xl overflow-hidden rounded-[35px] border border-white/15 bg-gradient-to-br from-red-950/95 via-red-900/90 to-red-950/95 text-white shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:rounded-[45px]">
        {/* Decorative glow */}
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-red-400/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/10 blur-3xl" />

        <Navbar />

        <div className="relative z-20 grid gap-8 px-5 pb-8 sm:px-8 lg:grid-cols-[230px_1fr]">
          <Sidebar />

          <Hero />
          
        </div>
      </section>
    </main>
  );
}

export default App;