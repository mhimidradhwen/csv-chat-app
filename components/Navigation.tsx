"use client";

import { Home, FileSpreadsheet, Info, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "CSV Chat", href: "/csv-chat", icon: FileSpreadsheet },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              CSV Chat Assistant
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={pathname === item.href ? "default" : "ghost"}
                      className="gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
            <div className="pl-4 border-l">
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton mode="modal">
                  <Button>Sign In</Button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}