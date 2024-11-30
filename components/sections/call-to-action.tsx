import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="border-t bg-muted/40 py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Transform Your Lead Management?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Join thousands of businesses already using GloboLead to qualify leads and boost conversions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="h-12 px-8">Start Your Free Trial</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-12 px-8">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}