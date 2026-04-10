'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  BarChart3,
  Code2,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Phone,
} from 'lucide-react';

export default function HomePage() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI Application Development',
      desc: 'Custom AI-powered applications using latest LLMs and automation.',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      desc: 'Transform raw data into meaningful insights.',
    },
    {
      icon: Code2,
      title: 'Product Engineering',
      desc: 'Build scalable web and mobile applications.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      desc: 'Modern cloud infrastructure and deployment.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Business with AI 🚀
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mb-8">
          We build intelligent AI systems, scalable applications, and modern cloud solutions.
        </p>

        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Phone size={16} />
            Contact Us
          </Link>

          <Link
            href="/services"
            className="border border-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="mb-4 text-cyan-400" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TRUST */}
      <section className="text-center py-10">
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          {[
            '10+ Years Experience',
            '200+ Projects',
            '50+ Clients',
            'Global Delivery',
          ].map((item) => (
            <span key={item} className="flex items-center gap-1">
              <CheckCircle2 size={14} className="text-green-400" />
              {item}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}