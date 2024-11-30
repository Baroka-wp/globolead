"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">
            Globo<span className="text-primary">Lead</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
            Use Cases
          </Link>
          <Link href="#tech-stack" className="text-muted-foreground hover:text-foreground transition-colors">
            Technology
          </Link>
          <Link href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
            Book Demo
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-sm">Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="text-sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}