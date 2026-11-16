import React from "react";
import { motion } from "framer-motion";
import { Waves, HeartPulse, BookOpen, CheckCircle2, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BLUE = "#01A5E2";
const ORANGE = "#FD4B01";

const services = [
  { icon: Waves, title: "Swim Lessons", description: "Water safety and swim instruction for children and adults. Contact us to ask about lesson availability.", link: "#contact", action: "Ask about lessons" },
  { icon: HeartPulse, title: "CPR Training", description: "Practical, hands-on CPR skills training with Coach Tasha. Choose skills-only training or a certification option.", link: "#pricing", action: "View CPR options" },
  { icon: BookOpen, title: "Coloring & Activity Books", description: "Engaging aquatic-themed activities designed to introduce and reinforce water safety concepts. More details coming soon.", link: "#books", action: "Learn more" },
];

const fadeUp = { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };

export default function AquaticTrainingSpaSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-3" aria-label="Aquatic 4 Life home">
            <img src="/aquatic4life-logo.png" alt="Aquatic 4 Life" className="h-12 w-auto max-w-[180px] object-contain" />
          </a>
          <nav className="hidden items-center gap-5 text-sm md:flex" aria-label="Main navigation">
            <a href="#pricing" className="hover:underline">CPR Classes</a>
            <a href="#about" className="hover:underline">Coach Tasha</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#books" className="hover:underline">Books</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <a href="#pricing"><Button style={{ backgroundColor: ORANGE }} className="rounded-xl text-white">CPR Options</Button></a>
        </div>
      </header>

      <main>
        <section id="home" className="bg-gradient-to-b from-sky-50 to-white">
          <div className="container mx-auto grid items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
            <motion.div {...fadeUp}>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: BLUE }}>Aquatic 4 Life · CPR Training</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Real Skills. Real Confidence. <span style={{ color: BLUE }}>Real Life.</span></h1>
              <p className="mt-5 max-w-xl text-lg text-gray-700">Be prepared when it matters most. Learn essential CPR skills through hands-on training with Coach Tasha.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#pricing"><Button style={{ backgroundColor: ORANGE }} className="rounded-xl text-white">Explore CPR Classes <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
                <a href="#contact"><Button variant="outline" className="rounded-xl">Ask a Question</Button></a>
              </div>
              <p className="mt-5 text-sm text-gray-600">CPR skills training and certification options available. Class dates and registration details will be posted when confirmed.</p>
            </motion.div>
            <motion.div {...fadeUp} className="flex justify-center md:justify-end">
              <div className="w-full max-w-md rounded-3xl bg-sky-100 p-6 text-center">
                <img src="/coach-tasha.png" alt="Illustration of Coach Tasha, CPR instructor" className="mx-auto max-h-[390px] w-full object-contain" />
                <p className="mt-3 font-semibold">Meet Coach Tasha</p>
                <p className="text-sm text-gray-600">Helping people build the confidence to respond.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="container mx-auto px-4 py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Choose Your CPR Training Option</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Both options include hands-on instruction and continental breakfast. Registration will open once the class schedule is confirmed.</p>
          <div className="mx-auto mt-9 grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              { name: "CPR Skills Training", price: "$65", features: ["Hands-on CPR skills instruction", "Continental breakfast included", "No certification issued"] },
              { name: "CPR Certification", price: "$105", features: ["Hands-on CPR instruction", "Continental breakfast included", "Certification upon successful completion of the applicable course requirements"] },
            ].map((option) => (
              <Card key={option.name} className="rounded-3xl border-2" style={{ borderColor: option.name === "CPR Certification" ? BLUE : "#e5e7eb" }}>
                <CardHeader><CardTitle>{option.name}</CardTitle><CardDescription><span className="text-4xl font-extrabold text-gray-900">{option.price}</span> <span>per person</span></CardDescription></CardHeader>
                <CardContent>
                  <ul className="space-y-3">{option.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} />{feature}</li>)}</ul>
                  <p className="mt-6 text-sm font-medium" style={{ color: BLUE }}>Registration details coming soon</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-xs text-gray-500">Certification eligibility, course type, dates, and location are subject to confirmation. A certificate is not included in the skills-only option.</p>
        </section>

        <section id="about" className="bg-sky-50 py-16">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
            <div className="flex justify-center"><img src="/coach-tasha.png" alt="Coach Tasha illustration" className="max-h-80 w-full max-w-sm object-contain" /></div>
            <div><h2 className="text-3xl font-bold">Train with Coach Tasha</h2><p className="mt-4 text-gray-700">CPR training is about more than memorizing steps. It's about gaining practical skills and the confidence to act in an emergency.</p><p className="mt-3 text-gray-700">Explore the training options above, or get in touch with questions about upcoming classes.</p><a href="#contact" className="mt-5 inline-block font-semibold underline" style={{ color: BLUE }}>Contact Aquatic 4 Life</a></div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">More from Aquatic 4 Life</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{services.map((service) => { const Icon = service.icon; return (
            <Card key={service.title} className="rounded-3xl"><CardHeader><Icon className="h-8 w-8" style={{ color: BLUE }} /><CardTitle className="mt-3">{service.title}</CardTitle><CardDescription>{service.description}</CardDescription></CardHeader><CardContent><a href={service.link} className="font-semibold underline" style={{ color: BLUE }}>{service.action}</a></CardContent></Card>
          ); })}</div>
        </section>

        <section id="books" className="bg-gray-50 py-16"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold">Coloring & Activity Books</h2><p className="mt-3 max-w-2xl text-gray-700">We're developing aquatic-themed coloring and activity books to help families explore water safety in an engaging way. Watch for updates on availability.</p></div></section>

        <section id="faq" className="container mx-auto px-4 py-16"><h2 className="text-3xl font-bold">CPR Training FAQ</h2><div className="mt-7 grid gap-5 md:grid-cols-2">
          <Card className="rounded-2xl"><CardHeader><CardTitle className="text-lg">What's the difference between the two options?</CardTitle></CardHeader><CardContent className="text-gray-700">The $65 option focuses on CPR skills without certification. The $105 option includes a certification pathway, subject to successful completion of the applicable course requirements.</CardContent></Card>
          <Card className="rounded-2xl"><CardHeader><CardTitle className="text-lg">When can I register?</CardTitle></CardHeader><CardContent className="text-gray-700">Upcoming dates, class location, and the registration link will be published after they're confirmed.</CardContent></Card>
        </div></section>

        <section id="contact" className="bg-sky-50 py-16"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold">Get in Touch</h2><p className="mt-3 max-w-xl text-gray-700">Questions about CPR training, swim lessons, or upcoming activity books? Contact Aquatic 4 Life directly.</p><div className="mt-6 space-y-3 text-gray-800">
          <p className="flex items-center gap-3"><Mail className="h-5 w-5" style={{ color: BLUE }} /><a href="mailto:lparks@aquatic4life.com" className="underline">lparks@aquatic4life.com</a></p>
          <p className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: BLUE }} /><a href="tel:+18184774212" className="underline">(818) 477-4212</a></p>
          <p className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: BLUE }} />Class locations provided with confirmed schedules</p>
        </div><p className="mt-5 text-sm text-gray-600">Please confirm contact information before publishing. The previous contact form was a nonfunctional demo and has been removed.</p></div></section>
      </main>
      <footer className="border-t py-9"><div className="container mx-auto px-4 text-sm text-gray-600"><p className="font-semibold text-gray-900">Aquatic 4 Life, Training & SPA LLC</p><p className="mt-2">Real Skills. Real Confidence. Real Life.</p><p className="mt-4">© {new Date().getFullYear()} Aquatic 4 Life, Training & SPA LLC</p></div></footer>
    </div>
  );
}
