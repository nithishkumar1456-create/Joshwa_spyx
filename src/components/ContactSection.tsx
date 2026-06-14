import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle, Sparkles, Clock, Compass } from "lucide-react";
import { PORTFOLIO_USER } from "../data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleBookingTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceTitle: string }>;
      if (customEvent.detail && customEvent.detail.serviceTitle) {
        setFormData((prev) => ({
          ...prev,
          projectDetails: `Hi Josh, I'm interested in booking your "${customEvent.detail.serviceTitle}" workflow! Let's schedule the project...`
        }));
        
        // Reset submitted screen if already submitted so they can fill it out again
        setIsSubmitted(false);

        // Scroll to contact section smoothly
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("booking-triggered" as any, handleBookingTrigger);
    return () => {
      window.removeEventListener("booking-triggered" as any, handleBookingTrigger);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDetails) {
      setErrorMsg("Please fill out all field arrays.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", projectDetails: "" });
      } else {
        const data = await response.json();
        setErrorMsg(data.message || "Failed to send message. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMsg("An error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Background radial highlight blur effect */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-brand/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs text-brand tracking-[0.2em] uppercase block mb-3">
            // INTERACTION ENGINE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase">
            LET'S WORK TOGETHER
          </h2>
          <div className="h-[2px] w-20 bg-brand mt-4" />
        </div>

        {/* Two-Column Grid layout: Left contact details, Right interactive form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">
          
          {/* Left Column - Contact Details Card */}
          <div className="col-span-1 lg:col-span-5 space-y-12">
            <div>
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-6">
                START A TIMELINE PROJECT
              </h3>
              <p className="font-sans text-neutral-400 text-sm font-light leading-relaxed max-w-md">
                Looking for a creative video editor to bring your vision to life? Let's collaborate. Drop a message using the form or reach out directly via official parameters.
              </p>
            </div>

            {/* Direct Contact specs details list */}
            <div className="space-y-6">
              
              {/* Phone Spec */}
              <div className="flex items-center gap-4 p-4 bg-neutral-950 border border-neutral-900 group hover:border-brand-muted transition-colors rounded-none">
                <div className="p-3 bg-brand/5 rounded-none border border-neutral-800 text-brand group-hover:bg-brand group-hover:text-black transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-0.5">DIRECT PHONE</span>
                  <a
                    href={`tel:${PORTFOLIO_USER.phone}`}
                    className="font-display font-bold text-base text-white hover:text-brand transition-colors cursor-none"
                  >
                    +91 {PORTFOLIO_USER.phone}
                  </a>
                </div>
              </div>

              {/* Email Spec */}
              <div className="flex items-center gap-4 p-4 bg-neutral-950 border border-neutral-900 group hover:border-brand-muted transition-colors rounded-none">
                <div className="p-3 bg-brand/5 rounded-none border border-neutral-800 text-brand group-hover:bg-brand group-hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-0.5">SECURE EMAIL</span>
                  <a
                    href={`mailto:${PORTFOLIO_USER.email}`}
                    className="font-display font-medium text-base text-white hover:text-brand transition-colors cursor-none"
                  >
                    {PORTFOLIO_USER.email}
                  </a>
                </div>
              </div>

              {/* Location Spec */}
              <div className="flex items-center gap-4 p-4 bg-neutral-950 border border-neutral-900 group hover:border-brand-muted transition-colors rounded-none">
                <div className="p-3 bg-brand/5 rounded-none border border-neutral-800 text-brand group-hover:bg-brand group-hover:text-black transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-0.5">GEOGRAPHIC LOCATION</span>
                  <span className="font-display font-bold text-base text-white uppercase">
                    {PORTFOLIO_USER.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Quick response SLAs disclaimer */}
            <div className="p-5 border border-dashed border-neutral-900 font-mono text-[10px] text-neutral-500 uppercase space-y-3">
              <div className="flex items-center gap-2 text-brand">
                <Compass className="w-3.5 h-3.5" />
                <span>EXPECTED SLA RESPONSE DETAILS</span>
              </div>
              <div>• Project Brief Responses: Within 12 Hours</div>
              <div>• Render Quotation files: Within 24 Hours timezone aligned</div>
            </div>
          </div>

          {/* Right Column - Submission Form Block */}
          <div className="col-span-1 lg:col-span-7">
            <div className="p-8 sm:p-10 bg-neutral-950 border border-neutral-900 rounded-none relative">
              <div className="absolute top-0 right-12 w-20 h-[10px] bg-brand pointer-events-none" />

              <h4 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6">
                PROJECT PREFERENCES FORM
              </h4>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    id="contact-form-elements"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Full Name input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                        Full Name / Agency
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-neutral-950 border border-neutral-900 hover:border-neutral-700 focus:border-brand px-4 py-3 text-sm text-white focus:outline-none transition-colors rounded-none font-sans cursor-none"
                        required
                      />
                    </div>

                    {/* Email address field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@agency.com"
                        className="w-full bg-neutral-950 border border-neutral-900 hover:border-neutral-700 focus:border-brand px-4 py-3 text-sm text-white focus:outline-none transition-colors rounded-none font-sans cursor-none"
                        required
                      />
                    </div>

                    {/* Project details area */}
                    <div className="space-y-2">
                      <label htmlFor="projectDetails" className="block font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                        Tell Me About Your Video (Reels counts, length, references)
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        rows={5}
                        placeholder="I need a 3-minute cinematic commercial edit, color graded in warm cinematic tones, synced to electronic soundtrack rhythms..."
                        className="w-full bg-neutral-950 border border-neutral-900 hover:border-neutral-700 focus:border-brand px-4 py-3 text-sm text-white focus:outline-none transition-colors rounded-none font-sans cursor-none leading-relaxed resize-none"
                        required
                      />
                    </div>

                    {/* Error container */}
                    {errorMsg && (
                      <p className="font-mono text-xs text-red-500 uppercase">{errorMsg}</p>
                    )}

                    {/* Submit interactive triggering action button */}
                    <button
                      type="submit"
                      id="btn-contact-submit"
                      disabled={isSubmitting}
                      className="interactive-hover w-full px-6 py-4 bg-brand text-[#050505] font-display font-extrabold text-xs tracking-widest uppercase rounded-none glow-btn-hover cursor-none flex items-center justify-center gap-2.5 transition-all text-center inline-flex"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>SYNCHRONIZING SECURE METRICS...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>SUBMIT PROJECT BRIEF</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="p-4 bg-brand/10 border border-brand/20 rounded-full text-brand mb-6 animate-pulse">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h5 className="font-display font-black text-2xl text-white uppercase mb-4 tracking-wide">
                      BRIEF DISPATCHED SUCCESSFULLY!
                    </h5>
                    <p className="font-mono text-[11px] text-neutral-400 leading-relaxed max-w-sm mb-8 uppercase">
                      Thanks for reaching out! Joshwa V. will analyze your request and reply to your coordinates inside the 12-hour response bracket.
                    </p>
                    <button
                      id="btn-form-reset"
                      onClick={() => setIsSubmitted(false)}
                      className="interactive-hover px-5 py-2.5 bg-[#050505] border border-neutral-905 hover:border-neutral-500 text-neutral-400 hover:text-brand font-mono text-[10px] tracking-widest uppercase rounded-none cursor-none transition-all"
                    >
                      [ Reset Submission Form ]
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
