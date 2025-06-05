'use client';

import { ArrowRightIcon, SparklesIcon, AcademicCapIcon, RocketLaunchIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-800 to-indigo-900 overflow-hidden">
        <RetroGrid />
        
        {/* Header */}
        <header className="absolute top-0 z-20 w-full px-6 py-6">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <Link href="/">
              <AuroraText className="text-3xl font-bold text-white hover:text-blue-200 transition-colors">
                Acme.
              </AuroraText>
            </Link>
            
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center pt-32 pb-64">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-8 flex justify-center"
            >
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/30 transition-all">
                <SparklesIcon className="h-4 w-4" />
                Now with AI superpowers
              </span>
            </motion.div>
            
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              <TypingAnimation className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Welcome to Acme
              </TypingAnimation>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
            >
              The all-in-one platform to grow your business faster than ever before. 
              Join 10,000+ businesses already revolutionizing their workflow.
            </motion.p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
                >
                  Go to Dashboard <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 translate-y-[100%] z-0"
        >
          <div className="relative w-full max-w-6xl mx-auto">
            <Image
              src="/hero-desktop.png"
              alt="Dashboard preview"
              width={1200}
              height={600}
              priority
              className="mx-auto hidden md:block rounded-t-xl shadow-2xl"
            />
            <Image
              src="/hero-mobile.png"
              alt="Mobile preview"
              width={560}
              height={620}
              priority
              className="mx-auto block md:hidden rounded-t-xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="absolute bottom-0 left-0 right-0 translate-y-[100%] z-0 bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Why Choose Acme?</h2>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
              Acme is designed to help you build and scale your business with ease. 
              Here are some of the key features that set us apart.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Blazing Fast Performance",
                  description: "Built with Next.js for optimal performance and SEO. Benchmarked 3x faster than competitors.",
                  icon: "⚡",
                  color: "text-yellow-400"
                },
                {
                  title: "Enterprise Security",
                  description: "End-to-end encryption and SOC2 compliance out of the box. Your data stays protected.",
                  icon: "🔒",
                  color: "text-blue-500"
                },
                {
                  title: "Seamless Integrations",
                  description: "Connect with 100+ tools including Slack, Notion, and Salesforce in minutes.",
                  icon: "🔌",
                  color: "text-green-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all hover:shadow-md"
                >
                  <div className={`text-4xl mb-5 ${feature.color}`}>{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="absolute bottom-0 left-0 right-0 translate-y-[200%] z-0 bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
              Start for free and upgrade as you grow. No hidden fees, cancel anytime.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Starter",
                  price: "₹299",
                  period: "/3 months",
                  description: "Perfect for individuals and small teams",
                  icon: <AcademicCapIcon className="h-8 w-8 text-blue-500" />,
                  features: [
                    "Up to 5 users",
                    "Basic analytics",
                    "Email support",
                    "100GB storage"
                  ]
                },
                {
                  title: "Business",
                  price: "₹999",
                  period: "/3 months",
                  description: "For growing businesses",
                  icon: <RocketLaunchIcon className="h-8 w-8 text-purple-500" />,
                  features: [
                    "Up to 20 users",
                    "Advanced analytics",
                    "Priority support",
                    "1TB storage",
                    "API access"
                  ],
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "₹1399",
                  period: "/3 months",
                  description: "For large organizations",
                  icon: <BuildingOffice2Icon className="h-8 w-8 text-indigo-500" />,
                  features: [
                    "Unlimited users",
                    "Dedicated account manager",
                    "24/7 support",
                    "Custom storage",
                    "SSO & SAML"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className={`bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all hover:shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-6">
                    {plan.icon}
                    <h3 className="text-2xl font-bold text-gray-800">{plan.title}</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-16 absolute bottom-0 left-0 right-0 translate-y-[470%] z-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <AuroraText className="text-3xl font-bold mb-4">Acme.</AuroraText>
              <p className="text-blue-200">
                The all-in-one platform for modern businesses.
              </p>
            </div>
            <div>
              
            </div>
            <div>
              
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row items-center justify-between">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              Project by Vedant Narayan. Inspired by Tailwind UI and Magic UI.
            </p>
            <div className="flex space-x-6">
              <Link href="https://instagram.com/vedant_n17?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" className="text-blue-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <Instagram className="h-5 w-5 text-blue-500 hover:text-black transition" />
                </svg>
              </Link>
              <Link href="https://github.com/Ved05nara" className="text-blue-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-blue-400">
            &copy; {new Date().getFullYear()} Acme. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}