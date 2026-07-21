"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Send, Paperclip, X } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const BUDGETS = ["Under $10k", "$10k – $25k", "$25k – $75k", "$75k+"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Flexible"];
const CONTACT_METHODS = ["Email", "Phone", "WhatsApp"];
const PROJECT_TYPES = [
  "Website / Landing Page",
  "Web Application / SaaS",
  "E-commerce",
  "Mobile App",
  "AI / Automation",
  "Other",
];

export function QuoteForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [timeline, setTimeline] = useState(TIMELINES[1]);
  const [contactMethod, setContactMethod] = useState(CONTACT_METHODS[0]);
  const [projectType, setProjectType] = useState(PROJECT_TYPES[1]);
  const [fileName, setFileName] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const requirements = String(form.get("requirements") || "").trim();

    const newErrors: Record<string, string> = {};
    if (name.length < 2) newErrors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address.";
    if (requirements.length < 10)
      newErrors.requirements = "Tell us a bit more about your project (10+ characters).";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    // Wire this up to Web3Forms / EmailJS with your access key.
    setTimeout(() => {
      router.push("/thank-you/");
    }, 1100);
  }

  return (
    <Section className="pt-0">
      <Container className="max-w-3xl">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-8 rounded-3xl border border-border-subtle bg-card p-8 shadow-card dark:border-white/10 dark:bg-white/[0.02] sm:p-10"
        >
          {/* Contact details */}
          <fieldset className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Jane Cooper" error={errors.name} />
            <Field label="Email address" name="email" type="email" placeholder="jane@company.com" error={errors.email} />
            <Field label="Company" name="company" placeholder="Company Inc." optional />
            <Field label="Phone" name="phone" placeholder="+1 (555) 000-0000" optional />
          </fieldset>

          {/* Project type */}
          <div>
            <p className="mb-3 text-sm font-medium text-ink dark:text-white">Project type</p>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(type)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    projectType === type
                      ? "border-transparent bg-gradient-brand text-white shadow-glow"
                      : "border-border-subtle text-ink/70 hover:border-primary/30 dark:border-white/10 dark:text-white/70"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <p className="mb-3 text-sm font-medium text-ink dark:text-white">Budget range</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b)}
                  className={cn(
                    "rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors",
                    budget === b
                      ? "border-transparent bg-gradient-brand text-white shadow-glow"
                      : "border-border-subtle text-ink/70 hover:border-primary/30 dark:border-white/10 dark:text-white/70"
                  )}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="mb-3 text-sm font-medium text-ink dark:text-white">Timeline</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {TIMELINES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTimeline(t)}
                  className={cn(
                    "rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors",
                    timeline === t
                      ? "border-transparent bg-gradient-brand text-white shadow-glow"
                      : "border-border-subtle text-ink/70 hover:border-primary/30 dark:border-white/10 dark:text-white/70"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="mb-2 block text-sm font-medium text-ink dark:text-white">
              Project requirements
            </label>
            <textarea
              name="requirements"
              rows={5}
              placeholder="Tell us what you're building, key features, and any technical constraints..."
              className="w-full resize-none rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-white/10 dark:bg-white/[0.03]"
            />
            {errors.requirements && (
              <p className="mt-1.5 text-xs text-red-500">{errors.requirements}</p>
            )}
          </div>

          {/* Attachment */}
          <div>
            <label className="mb-2 block text-sm font-medium text-ink dark:text-white">
              Attachment <span className="text-muted">(optional — brief, mockups, docs)</span>
            </label>
            <label
              htmlFor="attachment"
              className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-border-subtle bg-white px-4 py-3 text-sm text-muted transition-colors hover:border-primary/40 dark:border-white/15 dark:bg-white/[0.03]"
            >
              <span className="flex items-center gap-2">
                <Paperclip className="h-4 w-4" />
                {fileName || "Click to upload a file"}
              </span>
              {fileName && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setFileName(null);
                  }}
                  className="text-muted hover:text-ink dark:hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <input
                id="attachment"
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
          </div>

          {/* Preferred contact method */}
          <div>
            <p className="mb-3 text-sm font-medium text-ink dark:text-white">
              Preferred contact method
            </p>
            <div className="flex gap-2">
              {CONTACT_METHODS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setContactMethod(m)}
                  className={cn(
                    "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                    contactMethod === m
                      ? "border-transparent bg-gradient-brand text-white shadow-glow"
                      : "border-border-subtle text-ink/70 hover:border-primary/30 dark:border-white/10 dark:text-white/70"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.55)] transition-all hover:-translate-y-0.5 disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Request
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>
      </Container>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink dark:text-white">
        {label} {optional && <span className="text-muted">(optional)</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-white/10 dark:bg-white/[0.03]"
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
