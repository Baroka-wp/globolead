import { Card } from "@/components/ui/card";
import { Building2, GraduationCap, ShoppingBag, Zap } from "lucide-react";

export function UseCases() {
  return (
    <section id="use-cases" className="container px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Use Cases</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
          Discover how GloboLead transforms lead management across different industries
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <Building2 className="h-8 w-8 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Real Estate</h3>
          <p className="text-muted-foreground mb-4">
            Qualify property inquiries 24/7, schedule viewings automatically, and track follow-ups with potential buyers.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Automated property matching
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Instant viewing scheduling
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Price range qualification
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <GraduationCap className="h-8 w-8 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Education</h3>
          <p className="text-muted-foreground mb-4">
            Handle student inquiries, qualify program fits, and streamline the enrollment process.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Course recommendations
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Admission requirement checks
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Financial aid guidance
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <ShoppingBag className="h-8 w-8 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">E-commerce</h3>
          <p className="text-muted-foreground mb-4">
            Convert browsers into buyers with intelligent product recommendations and support.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Product matching
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Cart abandonment recovery
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Personalized offers
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}