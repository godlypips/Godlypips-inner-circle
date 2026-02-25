import React from "react"; import { motion } from "framer-motion"; import { Button } from "@/components/ui/button"; import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; import { Input } from "@/components/ui/input"; import { Textarea } from "@/components/ui/textarea";  
  
const WA_LINK = "https://wa.me/2348134791422";  
  
export default function GodlypipsInnerCircle() { return ( <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white"> {/* Hero */} <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"> <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}> <h1 className="text-4xl md:text-6xl font-bold leading-tight"> Join <span className="text-cyan-400">Godlypips InnerCircle</span> </h1> <p className="mt-6 text-lg text-zinc-300"> Learn professional trading with proper technical analysis, risk management, psychology, and trade management. </p> <div className="mt-8 flex gap-4"> <a href={WA_LINK} target="_blank" rel="noreferrer"> <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-2xl">Join the Mentorship</Button> </a> </div> </motion.div> <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="bg-zinc-800 rounded-2xl h-72 flex items-center justify-center"> <p className="text-zinc-400">Mentorship Preview</p> </motion.div> </section>  
  
{/* About */}  
  <section className="max-w-5xl mx-auto px-6 py-16">  
    <h2 className="text-3xl font-semibold text-center">About the Mentor</h2>  
    <p className="mt-6 text-center text-zinc-300">  
      Godlypips is a dedicated trading mentor focused on helping traders aged 20–40 achieve consistency through proven strategies and disciplined risk management.  
    </p>  
  </section>  
  
  {/* What You Learn */}  
  <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">  
    {[  
      "Technical Analysis Mastery",  
      "Risk Management",  
      "Trading Psychology",  
      "Trade Management"  
    ].map((item) => (  
      <Card key={item} className="bg-zinc-900 border-zinc-800">  
        <CardHeader>  
          <CardTitle>{item}</CardTitle>  
        </CardHeader>  
        <CardContent className="text-zinc-400">Deep practical training and live examples.</CardContent>  
      </Card>  
    ))}  
  </section>  
  
  {/* Benefits */}  
  <section className="max-w-5xl mx-auto px-6 py-16">  
    <h2 className="text-3xl font-semibold text-center">Transformation</h2>  
    <div className="mt-10 grid md:grid-cols-2 gap-8">  
      <Card className="bg-zinc-900 border-zinc-800">  
        <CardHeader>  
          <CardTitle>Before</CardTitle>  
        </CardHeader>  
        <CardContent className="text-zinc-400">  
          Random entries, poor risk control, emotional trading.  
        </CardContent>  
      </Card>  
      <Card className="bg-zinc-900 border-zinc-800">  
        <CardHeader>  
          <CardTitle>After</CardTitle>  
        </CardHeader>  
        <CardContent className="text-zinc-400">  
          Structured strategy, disciplined risk, confident execution.  
        </CardContent>  
      </Card>  
    </div>  
  </section>  
  
  {/* Pricing */}  
  <section className="max-w-5xl mx-auto px-6 py-16">  
    <h2 className="text-3xl font-semibold text-center">Pricing</h2>  
    <div className="mt-10 grid md:grid-cols-2 gap-8">  
      <Card className="bg-zinc-900 border-zinc-800">  
        <CardHeader>  
          <CardTitle>$300 / 1 Month</CardTitle>  
        </CardHeader>  
        <CardContent>  
          <ul className="text-zinc-400 space-y-2">  
            <li>Live mentorship</li>  
            <li>Strategy training</li>  
            <li>Community access</li>  
          </ul>  
          <a href={WA_LINK} target="_blank" rel="noreferrer">  
            <Button className="mt-6 w-full bg-cyan-500 text-black">Enroll Now</Button>  
          </a>  
        </CardContent>  
      </Card>  
      <Card className="bg-zinc-900 border-zinc-800">  
        <CardHeader>  
          <CardTitle>$500 Lifetime</CardTitle>  
        </CardHeader>  
        <CardContent>  
          <ul className="text-zinc-400 space-y-2">  
            <li>Lifetime access</li>  
            <li>All future updates</li>  
            <li>Private support</li>  
          </ul>  
          <a href={WA_LINK} target="_blank" rel="noreferrer">  
            <Button className="mt-6 w-full bg-cyan-500 text-black">Join Lifetime</Button>  
          </a>  
        </CardContent>  
      </Card>  
    </div>  
  </section>  
  
  {/* Testimonials */}  
  <section className="max-w-5xl mx-auto px-6 py-16">  
    <h2 className="text-3xl font-semibold text-center">Student Results</h2>  
    <div className="mt-10 grid md:grid-cols-3 gap-6">  
      {[1,2,3].map((i) => (  
        <Card key={i} className="bg-zinc-900 border-zinc-800">  
          <CardContent className="text-zinc-400">“This mentorship changed my trading completely.”</CardContent>  
        </Card>  
      ))}  
    </div>  
  </section>  
  
  {/* FAQ */}  
  <section className="max-w-4xl mx-auto px-6 py-16">  
    <h2 className="text-3xl font-semibold text-center">FAQ</h2>  
    <div className="mt-8 space-y-4 text-zinc-300">  
      <p><strong>Do I need experience?</strong> No, beginners are welcome.</p>  
      <p><strong>How are sessions delivered?</strong> Online live sessions.</p>  
      <p><strong>Is support included?</strong> Yes, ongoing guidance is provided.</p>  
    </div>  
  </section>  
  
  {/* CTA */}  
  <section className="text-center px-6 py-20">  
    <h2 className="text-4xl font-bold">Ready to Trade Like a Professional?</h2>  
    <p className="mt-4 text-zinc-400">Limited slots available for serious traders.</p>  
    <a href={WA_LINK} target="_blank" rel="noreferrer">  
      <Button className="mt-8 bg-cyan-500 text-black px-8 py-4 rounded-2xl">Join Godlypips InnerCircle</Button>  
    </a>  
  </section>  
  
  {/* Contact */}  
  <section className="max-w-3xl mx-auto px-6 pb-24">  
    <Card className="bg-zinc-900 border-zinc-800">  
      <CardHeader>  
        <CardTitle>Contact</CardTitle>  
      </CardHeader>  
      <CardContent className="space-y-4">  
        <Input placeholder="Your Name" />  
        <Input placeholder="Email" />  
        <Textarea placeholder="Message" />  
        <a href={WA_LINK} target="_blank" rel="noreferrer">  
          <div className="w-full">  
            <Button className="w-full bg-cyan-500 text-black">Send via WhatsApp</Button>  
          </div>  
        </a>  
      </CardContent>  
    </Card>  
  </section>  
</div>  
  
); }  
