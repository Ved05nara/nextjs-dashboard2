'use client';
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import Image from 'next/image';
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <InteractiveGridPattern 
          numSquares={30}
          maxOpacity={0.5}
          duration={60}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          )}
        />
        
        {/* Header/Nav */}
        <header className="absolute top-0 z-10 w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <AuroraText className="text-3xl font-bold">Acme.</AuroraText>
            <nav className="hidden md:flex gap-6">
              <Link href="/features" className="text-white hover:text-blue-200 transition-colors">Features</Link>
              <Link href="/pricing" className="text-white hover:text-blue-200 transition-colors">Pricing</Link>
              <Link href="/about" className="text-white hover:text-blue-200 transition-colors">About</Link>
            </nav>
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex justify-center">
              <span className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                <SparklesIcon className="h-4 w-4" />
                Now with AI superpowers
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <TypingAnimation className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Welcome to Acme
              </TypingAnimation>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              The all-in-one solution for your business needs. Built with Next.js and powered by Vercel, 
              this is the example for the{" "}
              <a href="https://nextjs.org/learn/" className="text-blue-400 hover:text-blue-300 underline">
                Next.js Learn Course
              </a>.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-white/20"
              >
                Live Demo
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center"
        >
          <div className="relative w-full max-w-6xl">
            <Image
              src="/hero-desktop.png"
              alt="Dashboard preview"
              width={1200}
              height={600}
              priority
              className="mx-auto hidden md:block"
            />
            <Image
              src="/hero-mobile.png"
              alt="Mobile preview"
              width={560}
              height={620}
              priority
              className="mx-auto block md:hidden"
            />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Acme?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Blazing Fast",
                description: "Built with Next.js for optimal performance and SEO.",
                icon: "⚡"
              },
              {
                title: "Secure by Default",
                description: "Enterprise-grade security out of the box.",
                icon: "🔒"
              },
              {
                title: "Easy Integration",
                description: "Connect with your favorite tools in minutes.",
                icon: "🔌"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}