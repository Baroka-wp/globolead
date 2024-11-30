import { Card } from "@/components/ui/card";
import { Database, Bot, Cpu, Server, Workflow, Lock } from "lucide-react";

const technologies = [
  {
    icon: Database,
    name: "Supabase",
    description: "Scalable PostgreSQL database with real-time capabilities"
  },
  {
    icon: Bot,
    name: "OpenAI & LangChain",
    description: "Advanced AI models for natural conversations and vector search"
  },
  {
    icon: Cpu,
    name: "Next.js 14",
    description: "Modern React framework with server components and API routes"
  },
  {
    icon: Server,
    name: "Mailjet",
    description: "Reliable email delivery for notifications and campaigns"
  },
  {
    icon: Workflow,
    name: "Docker",
    description: "Containerized deployment for consistent environments"
  },
  {
    icon: Lock,
    name: "Enterprise Security",
    description: "End-to-end encryption and SOC 2 compliance"
  }
];

export function TechStack() {
  return (
    <section id="tech-stack" className="container px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Built with Modern Technology
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
          Enterprise-grade infrastructure powered by industry-leading technologies
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <Card key={tech.name} className="p-6">
            <tech.icon className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
            <p className="text-muted-foreground">{tech.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}