import React from "react";
import { motion } from "framer-motion";
import { Waves, HeartPulse, BookOpen, CheckCircle2, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BLUE = "#01A5E2";
const ORANGE = "#FD4B01";
const QUOTE = "mailto:lparks@aquatic4life.com?subject=Mobile%20Private%20Swim%20Lessons%20-%20Quote%20Request";
const BOOKING = "https://app.acuityscheduling.com/schedule.php?owner=40519008";

const services = [
  { icon: Waves, title: "Mobile Private Swim Lessons", description: "Learn to swim with confidence! Personalized, seasonal mobile swim lessons for children and adults, tailored to individual skill levels and swimming goals.", features: ["All skill levels", "Personalized private instruction", "Returning Summer 2027"], link: "#swim", action: "Request a Quote" },
  { icon: HeartPulse, title: "CPR / First Aid", description: "Hands-on training designed to help you build confidence and respond in an emergency.", features: ["Adult CPR & First Aid", "Certification options", "Non-certification options"], link: "#pricing", action: "Upcoming Classes" },
  { icon: BookOpen, title: "Coloring & Activity Books", description: "Swim-themed coloring pages and safety activities—perfect for lessons, camps, and rainy-day fun.", features: ["Water safety education", "Creative coloring activities", "Engaging learning experiences"], link: "#books", action: "Coming Soon" },
];
const faqs = [
  { q: "Does Aquatic 4 Life offer Adult CPR & First Aid classes?", a: "Yes! We offer CPR and First Aid training, including certification and non-certification class options. Contact us to learn about upcoming classes and registration." },
  { q: "Do you offer year-round swim lessons?", a: "Our mobile private swim lessons are offered seasonally. Contact us for current availability and information about our upcoming Summer 2027 swim sessions!" },
  { q: "How much do private swim lessons cost?", a: "Pricing varies based on location, lesson duration, and individual swimming needs. Contact us to request a personalized quote." },
  { q: "Do I need my own swimming pool?", a: "No pool? No problem! Aquatic 4 Life offers mobile swim instruction. Contact us to inquire about available pool options in your area." },
];

const fadeUp = { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };

export default function AquaticTrainingSpaSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 [&_a:focus-visible]:outline-[#01A5E2] [&_button:focus-visible]:ring-[#01A5E2]">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-3" aria-label="Aquatic 4 Life home">
            <img src="/aquatic4life-logo.png" alt="Aquatic 4 Life" className="h-12 w-auto max-w-[180px] object-contain" />
          </a>
          <nav className="hidden items-center gap-4 text-sm lg:flex" aria-label="Main navigation">
            <a href="#pricing" className="hover:underline">CPR Classes</a>
            <a href="#about" className="hover:underline">Coach Tasha</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#swim" className="hover:underline">Swim Lessons</a>
            <a href="#books" className="hover:underline">Books</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <Button asChild style={{ backgroundColor: ORANGE }} className="rounded-xl text-white"><a href="#pricing">CPR Options</a></Button>
        </div>
      </header>

      <main>
        <section id="home" className="bg-gradient-to-b from-[#F0FAFD] to-white">
          <div className="container mx-auto grid items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
            <motion.div {...fadeUp}>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: BLUE }}>Aquatic 4 Life</p>
              <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[60px]" style={{ color: "#000000" }}><span style={{ color: ORANGE }}>Training</span> our way<br/><span style={{ color: BLUE }}>through life.</span></h1>
              <p className="mt-5 text-xl font-semibold text-black md:text-2xl">Swim lessons, CPR classes, and creative coloring and activity books—all in one place.</p>
              <p className="mt-5 max-w-xl text-lg text-gray-700">We help families feel confident in and around water. Learn essential life-saving skills and keep the fun going at home with our swim-themed coloring &amp; activity books.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild style={{ backgroundColor: ORANGE }} className="rounded-xl text-white"><a href="#pricing">Explore CPR Classes</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><a href="#services">Explore Our Services</a></Button>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="flex flex-col items-center gap-4 md:items-end">
              <img src="/coach-tashee-hand.png" alt="Coach Tasha welcoming visitors" className="mx-auto w-full max-w-[340px] object-contain" />
              <Card className="w-full max-w-lg rounded-3xl shadow-lg">
                <CardHeader><CardTitle className="flex items-center gap-2"><HeartPulse className="h-6 w-6" style={{ color: BLUE }} />Upcoming CPR Classes</CardTitle><CardDescription>American Red Cross Child CPR/AED with Latasha Parks</CardDescription></CardHeader>
                <CardContent>
                  <div className="divide-y">{["December 12, 2026", "December 19, 2026"].map(date => <div key={date} className="flex flex-wrap items-center justify-between gap-3 py-4"><div><p className="font-semibold">Saturday, {date}</p><p className="text-sm text-gray-600">9:00–11:00 AM CST</p></div><Button asChild style={{ backgroundColor: ORANGE }} className="rounded-xl text-white"><a href={BOOKING}>Register</a></Button></div>)}</div>
                  <p className="mt-3 text-sm text-gray-700">Starting at $65 · Light breakfast included</p><p className="mt-2 text-sm font-semibold">$40 deposit reserves your seat.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="container mx-auto px-4 py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Choose Your Child CPR/AED Training Option</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Be prepared when it matters most. Both options include hands-on instruction with Coach Tasha and a light breakfast.</p>
          <div className="mx-auto mt-8 flex justify-center"><img src="/coach-tashee-cpr.png" alt="Coach Tasha with a CPR training manikin" className="max-h-64 w-full max-w-sm object-contain" /></div>
          <div className="mx-auto mt-9 grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              { name: "Child CPR/AED Skills Training", price: "$65", features: ["Hands-on Child CPR/AED instruction", "Light breakfast included", "No certification issued"] },
              { name: "Child CPR/AED Certification", price: "$105", features: ["Hands-on Child CPR/AED instruction", "Light breakfast included", "Certification upon successful completion of the applicable course requirements"] },
            ].map((option) => (
              <Card key={option.name} className="rounded-3xl border-2" style={{ borderColor: option.price === "$105" ? BLUE : "#e5e7eb" }}>
                <CardHeader><CardTitle>{option.name}</CardTitle><CardDescription><span className="text-4xl font-extrabold text-gray-900">{option.price}</span> <span>per person</span></CardDescription></CardHeader>
                <CardContent>
                  <ul className="space-y-3">{option.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} />{feature}</li>)}</ul>
                  <p className="mt-4 text-sm font-medium">$40 deposit to reserve</p><Button asChild className="mt-5 w-full rounded-xl text-white" style={{ backgroundColor: ORANGE }}><a href={BOOKING}>{option.price === "$105" ? "Register for Certification" : "Register for Training"}</a></Button>{option.price === "$105" && <p className="mt-3 text-sm text-gray-600">Select the $40 certification add-on during booking.</p>}
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-xs text-gray-500">Remaining balances are due seven days before class. Minimum 5 and maximum 10 participants per class. Registration and cancellation policies apply.</p>
        </section>

        <section id="about" className="bg-[#F0FAFD] py-16">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
            <div className="flex justify-center"><img src="/coach-tashee.png" alt="Coach Tasha illustration" className="max-h-80 w-full max-w-sm object-contain" /></div>
            <div><h2 className="text-3xl font-bold">About Coach Tasha</h2><p className="mt-3 font-semibold">LaTasha Parks | Founder, Aquatic Educator &amp; Entrepreneur</p><p className="mt-4 text-gray-700">For Coach Tasha, swimming is more than a skill. It's a lifelong passion with a purpose.</p><p className="mt-3 text-gray-700">Introduced to swimming at an early age through the National Youth Sports Program, LaTasha developed a love for the water that led her to competitive swimming in high school and, in 1999, to serving as a lifeguard with the very program that helped shape her journey.</p><p className="mt-3 text-gray-700">Having experienced the devastating impact of drowning within her community, she developed a deep commitment to teaching others how to swim and helping families understand the importance of water safety.</p><p className="mt-3 text-gray-700">As an aquatic educator and entrepreneur, LaTasha is passionate about creating innovative educational resources that teach water safety beyond the swimming pool.</p><p className="mt-3 text-gray-700">Through Aquatic 4 Life, Coach Tasha is dedicated to building confidence, teaching essential life-saving skills, and empowering individuals and families to be safer in and around water.</p><p className="mt-4 font-semibold" style={{ color: "#01A5E2" }}>Training our way through life.</p></div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">What We Offer</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{services.map((service) => { const Icon = service.icon; return (
            <Card key={service.title} className="flex h-full flex-col rounded-3xl"><CardHeader><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F0FAFD]"><Icon className="h-8 w-8" style={{ color: BLUE }} /></div><CardTitle className="mt-3">{service.title}</CardTitle><CardDescription>{service.description}</CardDescription></CardHeader><CardContent className="flex flex-1 flex-col"><ul className="space-y-3 text-sm text-gray-700">{service.features.map(feature => <li key={feature} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} />{feature}</li>)}</ul><div className="mt-auto pt-6"><Button asChild variant="outline" className="rounded-xl"><a href={service.link}>{service.action}<ArrowRight className="ml-2 h-4 w-4" /></a></Button></div></CardContent></Card>
          ); })}</div>
        </section>

        <section id="swim" className="border-t bg-[#F0FAFD] py-16">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "#01A5E2" }}>Summer 2027</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Learn to Swim with Confidence.</h2>
              <p className="mt-4 text-gray-700">Aquatic 4 Life offers personalized, seasonal mobile private swim lessons for children and adults, tailored to individual skill levels and swimming goals.</p>
              <h3 className="mt-6 text-xl font-semibold">Personalized Lessons. Personalized Pricing.</h3>
              <p className="mt-2 text-gray-700">Pricing varies based on location, lesson duration, and individual needs.</p>
              <Button asChild className="mt-6 rounded-xl text-white" style={{ backgroundColor: ORANGE }}><a href={QUOTE}>Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
            </div>
            <Card className="rounded-3xl"><CardHeader><CardTitle>No pool? No problem!</CardTitle></CardHeader><CardContent><p className="text-gray-700">Contact us to inquire about available pool options in your area.</p><Button asChild variant="outline" className="mt-5 rounded-xl"><a href="mailto:lparks@aquatic4life.com?subject=Swim%20Lesson%20Pool%20Options">Ask About Pool Options</a></Button></CardContent></Card>
          </div>
        </section>

        <section id="books" className="bg-white py-16">
          <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
            <div><h2 className="text-3xl font-bold md:text-4xl">Coloring &amp; Activity Books</h2><p className="mt-4 text-gray-700">Reinforce water safety with engaging worksheets, puzzles, and black-and-white coloring pages. Great for lesson breaks and take-home practice.</p><ul className="mt-5 space-y-3 text-gray-700">{["Water safety education", "Creative coloring activities", "Engaging learning experiences"].map(item => <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: BLUE }} />{item}</li>)}</ul><Button asChild variant="outline" className="mt-6 rounded-xl"><a href="#contact">Coming Soon</a></Button></div>
            <Card className="rounded-3xl"><CardHeader><CardTitle>Explore Our Upcoming Books</CardTitle><CardDescription>Water safety and learning through creativity</CardDescription></CardHeader><CardContent><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{Array.from({length: 6}, (_, i) => <div key={i} className="relative grid aspect-[17/22] place-items-center overflow-hidden rounded-xl border bg-gray-50"><span className="px-2 text-center text-xs text-gray-500">{i === 5 ? "Spanish edition coming soon" : "Cover coming soon"}</span><img src={`/book-cover-${i + 1}.png`} alt={i === 5 ? "Aquatic 4 Life activity book — Spanish edition" : `Aquatic 4 Life activity book ${i + 1}`} className="absolute inset-0 h-full w-full object-contain bg-white" onError={e => { e.currentTarget.style.display = "none"; }} loading="lazy" /></div>)}</div></CardContent></Card>
          </div>
        </section>

        {/* Swimmer testimonial */}
        <section id="testimonials" className="py-16" style={{ backgroundColor: BLUE }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-black">Little Swimmers. Big Impact.</p>
            <h2 className="mt-3 text-3xl font-extrabold text-black md:text-4xl">What Our Swimmers Say</h2>
            <Card className="mx-auto mt-8 max-w-3xl rounded-3xl bg-white shadow-lg">
              <CardContent className="px-6 py-8 md:px-12 md:py-10">
                <div aria-hidden="true" className="text-7xl font-extrabold leading-none" style={{ color: ORANGE }}>“</div>
                <blockquote className="text-xl font-medium italic leading-relaxed text-black md:text-2xl">“Ms. Latasha I just love swim lessons, I just want to stay in the pool foreverrrr!!”</blockquote>
                <div className="mx-auto mt-6 h-1 w-12 rounded-full" style={{ backgroundColor: ORANGE }} />
                <p className="mt-4 text-sm text-gray-600">— Aquatic 4 Life young swimmer</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="bg-gray-50 py-16"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold md:text-4xl">FAQ</h2><div className="mt-7 grid gap-6 md:grid-cols-2">{faqs.map(item => <Card key={item.q} className="rounded-3xl"><CardHeader><CardTitle className="text-lg">{item.q}</CardTitle></CardHeader><CardContent className="text-gray-700">{item.a}</CardContent></Card>)}</div></div></section>

        <section id="contact" className="bg-[#F0FAFD] py-16"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold">Get in Touch</h2><p className="mt-3 max-w-xl text-gray-700">Questions about CPR training, swim lessons, or upcoming activity books? Contact Aquatic 4 Life directly.</p><div className="mt-6 space-y-3 text-gray-800">
          <p className="flex items-center gap-3"><Mail className="h-5 w-5" style={{ color: BLUE }} /><a href="mailto:lparks@aquatic4life.com" className="underline">lparks@aquatic4life.com</a></p>
          <p className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: BLUE }} /><a href="tel:+18184774212" className="underline">(818) 477-4212</a></p>
          <p className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: BLUE }} />Class locations provided with confirmed schedules</p>
        </div></div></section>
      </main>
      <footer className="border-t py-9"><div className="container mx-auto px-4 text-sm text-gray-600"><p className="font-semibold text-gray-900">Aquatic 4 Life, Training & SPA LLC</p><p className="mt-2">Training our way through life.</p><p className="mt-4">© {new Date().getFullYear()} Aquatic 4 Life, Training & SPA LLC</p></div></footer>
    </div>
  );
}
