import Link from "next/link";
import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold tracking-tight">
              Globo<span className="text-primary">Lead</span>
            </span>
          </Link>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2024 GloboLead. All rights reserved.
        </div>
      </div>
    </footer>
  );
}