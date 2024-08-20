import HomeHero from "./components/hero/HomeHero";
import NavbarW from "./components/set/NavbarW";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div className="relative z-40">
          <NavbarW />
        </div>

        <div className="absolute top-0 left-0 right-0">
          <HomeHero />
        </div>
      </section>
    </main>
  );
}
