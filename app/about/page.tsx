import { Card } from "@/components/ui/card";
import { FileSpreadsheet, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center justify-center mb-6">
              <FileSpreadsheet className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-center mb-6">About CSV Chat Assistant</h1>
            <div className="space-y-6 text-muted-foreground">
              <p>
                CSV Chat Assistant is a powerful tool designed to help users analyze and understand their CSV data through natural conversation. Built with modern web technologies and a focus on user experience, it makes data analysis accessible to everyone.
              </p>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">About the Author</h2>
                <p>
                  Created by Mouhamed Radhwen Mhimid, a passionate developer focused on building tools that make data analysis more accessible and intuitive.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Features</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Intuitive CSV file upload</li>
                  <li>Natural language data analysis</li>
                  <li>Real-time chat interface</li>
                  <li>Support for large datasets</li>
                  <li>Beautiful, responsive design</li>
                </ul>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" asChild>
                  <Link href="mailto:mhimid.medradhwen@gmail.com" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com" target="_blank" className="gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://twitter.com" target="_blank" className="gap-2">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}