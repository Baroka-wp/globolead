import { MessageSquare, Users, BarChart3 } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="border-t bg-muted/40">
      <div className="container grid gap-6 px-4 py-24 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-8">
          <MessageSquare className="h-10 w-10 mb-4 text-primary" />
          <h3 className="text-xl font-bold">AI-Powered Conversations</h3>
          <p className="mt-2 text-muted-foreground">
            Intelligent chatbot that learns from your business context and qualifies leads automatically.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-8">
          <Users className="h-10 w-10 mb-4 text-primary" />
          <h3 className="text-xl font-bold">Smart CRM Integration</h3>
          <p className="mt-2 text-muted-foreground">
            Seamlessly manage leads, track interactions, and automate follow-ups in one place.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-8">
          <BarChart3 className="h-10 w-10 mb-4 text-primary" />
          <h3 className="text-xl font-bold">Advanced Analytics</h3>
          <p className="mt-2 text-muted-foreground">
            Get deep insights into your lead qualification process and conversion metrics.
          </p>
        </div>
      </div>
    </section>
  );
}