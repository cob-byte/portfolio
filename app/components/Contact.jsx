"use client";
import { useState } from "react";

export default function Contact() {
  const [result, setResult]           = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm]               = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResult("Sending...");

    const data = new FormData(e.target);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setResult("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
        e.target.reset();
      } else {
        setResult(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setResult("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();
  const inputCls = `w-full bg-surface border border-border rounded-xl px-4 py-3 text-text text-sm outline-none
    placeholder:text-muted transition-colors duration-200 focus:border-accent
    disabled:opacity-40 disabled:cursor-not-allowed`;

  return (
    <section id="contact" className="w-full px-6 sm:px-12 xl:px-16 py-16 sm:py-24 scroll-mt-20 border-t border-border">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-text tracking-tight mb-6">
            Contact
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;m always open to new opportunities.
            Drop me a message and I&apos;ll get back to you.
          </p>
        </div>


        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text" name="name" placeholder="Your name"
              value={form.name} onChange={onChange}
              required disabled={isSubmitting}
              className={inputCls}
            />
            <input
              type="email" name="email" placeholder="Your email"
              value={form.email} onChange={onChange}
              required disabled={isSubmitting}
              className={inputCls}
            />
          </div>
          <textarea
            name="message" placeholder="Your message" rows={6}
            value={form.message} onChange={onChange}
            required disabled={isSubmitting}
            className={`${inputCls} resize-none`}
          />

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-full sm:w-auto px-10 py-3 rounded-full font-medium text-sm transition-all duration-200
                ${isValid && !isSubmitting
                  ? "bg-accent text-white hover:bg-red-600 hover:scale-105 active:scale-95"
                  : "bg-surface border border-border text-muted cursor-not-allowed"
                }`}
            >
              {isSubmitting ? "Sending…" : "Send Message →"}
            </button>

            {result && (
              <p className={`text-sm transition-all duration-300
                ${result.includes("sent") ? "text-green-400" : result.includes("Sending") ? "text-accent" : "text-red-400"}`}>
                {result}
              </p>
            )}
          </div>
        </form>

      </div>
    </section>
  );
}
