import Carousel from "./components/brand/Carousel";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <section className="">
        <div>
          <Hero />
        </div>
      </section>

      <section>
        <div>
          <Carousel />
        </div>
      </section>
    </main>
  );
}
