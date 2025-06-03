'use client';

import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from 'next/image';
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Now FULL blue bg */}
      <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-800 to-indigo-900">
        <InteractiveGridPattern />
        
        {/* Header */}
        <header className="absolute top-0 z-10 w-full px-6 py-6">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <Link
              href="/"
            ><AuroraText className="text-3xl font-bold text-white">Acme.</AuroraText></Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/features" className="text-white/90 hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="text-white/90 hover:text-white transition-colors">Pricing</Link>
              <Link href="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
            </nav>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-blue-600 transition-all hover:bg-white/90"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Text & Buttons - Centered in blue area */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center pt-32 pb-64">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8 flex justify-center">
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur-sm">
                <SparklesIcon className="h-4 w-4" />
                Now with AI superpowers
              </span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              <TypingAnimation className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Welcome to Acme
              </TypingAnimation>
            </h1>
            
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              The all-in-one platform to grow your business faster than ever before.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Get Started <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="rounded-full bg-transparent px-8 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-white transition-all hover:bg-white/10"
              >
                Live Demo
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Hero Image - Pushed WAY down */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 translate-y-[100%] z-0" // Pushes image 100% down
        >
          <div className="relative w-full max-w-6xl mx-auto">
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

      {/* Features Section - Starts BELOW the image */}
      <section className="pt-48 pb-24 px-6 sm:px-10 bg-white"> {/* Extra top padding */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Why Choose Acme?</h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Acme is designed to help you build and scale your business with ease. 
            Here are some of the key features that set us apart.
          </p>
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
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all"
              >
                <div className="text-4xl mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}