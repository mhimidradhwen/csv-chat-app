"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FileSpreadsheet, BarChart2, MessageSquare, Shield, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useUser } from '@clerk/nextjs';

const features = [
  {
    icon: FileSpreadsheet,
    title: "CSV File Support",
    description: "Upload and analyze any CSV file with ease. Support for large datasets and various formats."
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Chat naturally with your data. Ask questions in plain English and get instant insights."
  },
  {
    icon: BarChart2,
    title: "Advanced Analytics",
    description: "Get detailed statistical analysis, trends, and patterns from your data automatically."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is processed securely and never stored. Privacy-first approach to data analysis."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <main className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Chat with Your CSV Data
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Upload your CSV files and get instant insights through natural conversation.
              Analyze, explore, and understand your data effortlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href={isSignedIn ? "/csv-chat" : "/sign-up"}>
                <Button size="lg" className="gap-2">
                  {isSignedIn ? (
                    <>
                      <FileSpreadsheet className="h-5 w-5" />
                      Start Analyzing
                    </>
                  ) : (
                    <>
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Powerful Features for Data Analysis
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={item}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-primary/10 rounded-full mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 py-20">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Analyzing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who are already getting insights from their data.
          </p>
          <Link href={isSignedIn ? "/csv-chat" : "/sign-up"}>
            <Button size="lg" className="gap-2">
              {isSignedIn ? "Go to Dashboard" : "Create Free Account"}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}