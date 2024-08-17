import Hero from "./components/hero/Hero";
import NavbarW from "./components/set/NavbarW";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div>
          <NavbarW />
        </div>

        <div className="absolute top-0 left-0 right-0">
          <Hero />
        </div>
      </section>
    </main>
  );
}
