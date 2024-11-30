import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { BookDemo } from "@/components/sections/book-demo";
import { Features } from "@/components/sections/features";
import { UseCases } from "@/components/sections/use-cases";
import { CallToAction } from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-screen-2xl">
          <Hero />
          <Features />
          <UseCases />
          <TechStack />
          <BookDemo />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
}