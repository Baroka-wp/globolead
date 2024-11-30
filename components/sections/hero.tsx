import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="container px-4 py-24 md:py-32">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
          🚀 Next-gen Lead Management Platform
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="gradient-text">Transform Your Lead Management</span>
          <br className="hidden sm:inline" />
          with AI-Powered Intelligence
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
          Automate lead qualification, enhance customer experience, and boost conversions with our
          intelligent AI assistant. Seamlessly integrate with your existing tools.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="h-12 px-8 gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/demo">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Request Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}