import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Waves,
  HeartPulse,
  BookOpen,
  LifeBuoy,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// Simple utility for staggering animations
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AquaticTrainingSpaSite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const services = [
    {
      icon: <Waves className="h-8 w-8" aria-hidden />,
      title: "Swim Lessons",
      blurb:
        "Private, semi‑private, and group lessons for kids and adults. Water safety, confidence, and technique—at your pace.",
      bullets: ["All levels", "Infant survival options", "Stroke clinics"],
      cta: "View lesson options",
      href: "#contact",
    },
    {
      icon: <HeartPulse className="h-8 w-8" aria-hidden />,
      title: "CPR / First Aid",
      blurb:
        "AHA‑aligned courses for parents, coaches, and teams. Hands‑on skills with certification on the same day.",
      bullets: ["Adult & Pediatric CPR/AED", "First Aid", "BLS for Providers"],
      cta: "Upcoming classes",
      href: "#schedule",
    },
    {
      icon: <BookOpen className="h-8 w-8" aria-hidden />,
      title: "Coloring & Activity Books",
      blurb:
        "Swim‑themed coloring pages and safety activities—perfect for lessons, camps, and rainy‑day fun.",
      bullets: ["Printable packs", "Custom branding", "Bulk orders"],
      cta: "Shop / request samples",
      href: "#shop",
    },
  ];

  const pricing = [
    {
      name: "Starter Splash",
      price: "$49",
      period: "per lesson",
      features: ["30‑min private lesson", "Personalized goals", "Free evaluation"],
      best: false,
    },
    {
      name: "Confident Swimmer",
      price: "$199",
      period: "4‑lesson pack",
      features: [
        "4 × 45‑min sessions",
        "Video stroke feedback",
        "Progress report",
      ],
      best: true,
    },
    {
      name: "Family Bundle",
      price: "$349",
      period: "per month",
      features: [
        "Weekly semi‑private",
        "Siblings welcome",
        "One CPR seat 50% off",
      ],
      best: false,
    },
  ];

  const testimonials = [
    {
      name: "Jade R.",
      quote:
        "My 5‑year‑old went from nervous to swimming across the pool in a month! The coaches are so patient.",
      stars: 5,
    },
    {
      name: "Coach Malik",
      quote:
        "Best CPR class I’ve taken—clear, practical, and paced perfectly. Left feeling ready for an emergency.",
      stars: 5,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    // This demo just simulates success.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 select-none">
            <div className="h-9 w-9 rounded-2xl bg-cyan-100 grid place-items-center">
              <LifeBuoy className="h-5 w-5" aria-hidden />
            </div>
            <div className="font-semibold leading-tight">
              <div>Aquatic Training & SPA</div>
              <div className="text-xs text-gray-500">Swim • CPR • Activities</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-cyan-700">Services</a>
            <a href="#schedule" className="hover:text-cyan-700">Schedule</a>
            <a href="#pricing" className="hover:text-cyan-700">Pricing</a>
            <a href="#shop" className="hover:text-cyan-700">Books</a>
            <a href="#faq" className="hover:text-cyan-700">FAQ</a>
            <a href="#contact" className="hover:text-cyan-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact">
              <Button className="rounded-2xl">Book Now</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-50 via-white to-white" />
        <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <Badge className="rounded-full px-3 py-1 bg-cyan-600 hover:bg-cyan-600">Safety First, Fun Always</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Swim lessons, CPR classes, and creative activity books—
              <span className="text-cyan-700"> all in one place.</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              We help families feel confident in and around water. Learn essential life‑saving skills and keep the fun going at home with our swim‑themed coloring & activity books.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services"><Button className="rounded-2xl">Explore Services</Button></a>
              <a href="#contact"><Button variant="outline" className="rounded-2xl">Get Started</Button></a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
              <CheckCircle2 className="h-4 w-4" /> Certified Instructors
              <CheckCircle2 className="h-4 w-4" /> Warm‑water pools
              <CheckCircle2 className="h-4 w-4" /> Family‑friendly scheduling
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-cyan-100/50 blur-xl" />
              <Card className="rounded-3xl shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Waves className="h-5 w-5"/> Next Available Sessions</CardTitle>
                  <CardDescription>Quick picks to jump right in</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Beginner Swim (Age 4–6)</p>
                        <p className="text-sm text-gray-500">Sat 10:00–10:45 AM</p>
                      </div>
                      <a href="#contact"><Button size="sm" className="rounded-xl">Reserve</Button></a>
                    </li>
                    <li className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Adult Stroke Clinic</p>
                        <p className="text-sm text-gray-500">Tue 7:00–7:45 PM</p>
                      </div>
                      <a href="#contact"><Button size="sm" className="rounded-xl">Reserve</Button></a>
                    </li>
                    <li className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">CPR/AED for Parents</p>
                        <p className="text-sm text-gray-500">Sun 2:00–4:00 PM</p>
                      </div>
                      <a href="#contact"><Button size="sm" className="rounded-xl">Reserve</Button></a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What we offer
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className={`rounded-3xl ${s.best ? "border-cyan-600" : ""}`}>
                <CardHeader>
                  <div className="h-10 w-10 rounded-2xl bg-cyan-50 grid place-items-center text-cyan-700">
                    {s.icon}
                  </div>
                  <CardTitle className="mt-3">{s.title}</CardTitle>
                  <CardDescription>{s.blurb}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href={s.href} className="inline-flex mt-5">
                    <Button variant="outline" className="rounded-xl">
                      {s.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Sample schedule</h2>
          <p className="mt-2 text-gray-600 max-w-prose">
            Below is a sample weekly flow. We’ll confirm exact times when you book.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                day: "Tuesday",
                items: [
                  { name: "Adult Stroke Clinic", time: "7:00–7:45 PM" },
                  { name: "Open Lap Swim (members)", time: "8:00–9:00 PM" },
                ],
              },
              {
                day: "Saturday",
                items: [
                  { name: "Beginner Kids (4–6)", time: "10:00–10:45 AM" },
                  { name: "Intermediate Kids (7–10)", time: "11:00–11:45 AM" },
                ],
              },
              {
                day: "Sunday",
                items: [
                  { name: "CPR/AED for Parents", time: "2:00–4:00 PM" },
                  { name: "BLS for Providers", time: "4:30–7:30 PM" },
                ],
              },
            ].map((col) => (
              <Card key={col.day} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5" /> {col.day}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {col.items.map((it) => (
                      <li key={it.name} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{it.name}</p>
                          <p className="text-sm text-gray-500">{it.time}</p>
                        </div>
                        <a href="#contact"><Button size="sm" className="rounded-xl">Reserve</Button></a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Books / Shop */}
      <section id="shop" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Coloring & activity books</h2>
            <p className="mt-3 text-gray-600 max-w-prose">
              Reinforce water safety with engaging worksheets, puzzles, and black‑and‑white coloring pages. Great for lesson breaks and take‑home practice.
            </p>
            <ul className="mt-5 space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Printable PDFs or physical books</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Custom pages with your logo</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Fundraiser & bulk discounts</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#contact"><Button className="rounded-2xl">Request samples</Button></a>
              <a href="#contact"><Button variant="outline" className="rounded-2xl">Wholesale info</Button></a>
            </div>
          </div>
          <div>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Featured pack</CardTitle>
                <CardDescription>Water Safety Starter (25 pages)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-[4/5] rounded-xl border grid place-items-center text-xs text-gray-500">
                      Page {i}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Simple pricing</h2>
          <p className="mt-2 text-gray-600 text-center">Transparent options for every goal.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {pricing.map((tier) => (
              <Card
                key={tier.name}
                className={`rounded-3xl ${tier.best ? "border-cyan-600 shadow-lg" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {tier.name}
                    {tier.best && <Badge className="bg-cyan-600 hover:bg-cyan-600">Most Popular</Badge>}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-extrabold">{tier.price}</span>
                    <span className="text-gray-500"> / {tier.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex mt-5">
                    <Button className="rounded-xl w-full">Choose plan</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Families love us</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-3xl">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-yellow-500" aria-label={`${t.stars} stars`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-gray-700">“{t.quote}”</p>
                <p className="mt-2 text-sm text-gray-500">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What should we bring to swim lessons?",
                a: "Swimsuit, towel, goggles (optional), and a labeled water bottle. We provide kickboards and noodles.",
              },
              {
                q: "Do you offer make‑ups?",
                a: "Yes—one make‑up per month with 24‑hour notice, subject to availability.",
              },
              {
                q: "Are your CPR classes certified?",
                a: "Yes, our courses align with AHA guidelines and include 2‑year certification upon completion.",
              },
              {
                q: "Do you travel to private pools?",
                a: "We can travel for private and small‑group lessons within our service radius. Contact us for a quote.",
              },
            ].map((item) => (
              <Card key={item.q} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">{item.a}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
            <p className="mt-3 text-gray-600">
              Tell us what you need—lessons, CPR certification, or book orders—and we’ll reply with availability and next steps.
            </p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> (555) 123‑4567</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@aquatictrainingspa.com</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Your City, USA</p>
            </div>
          </div>
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>We usually reply within one business day.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">Name</label>
                  <Input
                    id="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">Email</label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us which service you’re interested in…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="rounded-2xl w-full">Send</Button>
                {sent && (
                  <p className="text-sm text-green-700">Thanks! Your message was sent.</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold">Aquatic Training & SPA</div>
            <p className="mt-2 text-gray-600 max-w-sm">
              Building confident swimmers and safer communities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="font-medium">Explore</div>
              <a className="block hover:text-cyan-700" href="#services">Services</a>
              <a className="block hover:text-cyan-700" href="#pricing">Pricing</a>
              <a className="block hover:text-cyan-700" href="#faq">FAQ</a>
            </div>
            <div className="space-y-2">
              <div className="font-medium">Resources</div>
              <a className="block hover:text-cyan-700" href="#shop">Books</a>
              <a className="block hover:text-cyan-700" href="#schedule">Schedule</a>
              <a className="block hover:text-cyan-700" href="#contact">Contact</a>
            </div>
          </div>
          <div className="md:justify-self-end text-gray-500">
            <p>© {new Date().getFullYear()} Aquatic Training & SPA</p>
            <p className="mt-1">Made with :droplet: by your team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
