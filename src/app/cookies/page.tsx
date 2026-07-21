import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/sections/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "How Nexora Solutions uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookies Policy" updated="July 21, 2026">
      <p>
        This Cookies Policy explains how Nexora Solutions uses cookies and
        similar technologies when you visit our website.
      </p>

      <LegalSection title="1. What are cookies?">
        <p>
          Cookies are small text files stored on your device that help
          websites remember information about your visit, such as
          preferences and login state.
        </p>
      </LegalSection>

      <LegalSection title="2. Types of cookies we use">
        <p>
          <strong className="font-semibold text-ink dark:text-white">Essential cookies</strong> —
          required for the site to function, such as remembering your
          cookie consent choice and theme preference.
        </p>
        <p>
          <strong className="font-semibold text-ink dark:text-white">Analytics cookies</strong> —
          help us understand how visitors interact with our site so we can
          improve it.
        </p>
        <p>
          <strong className="font-semibold text-ink dark:text-white">Preference cookies</strong> —
          remember choices you've made, like dark mode.
        </p>
      </LegalSection>

      <LegalSection title="3. Managing cookies">
        <p>
          You can accept or decline non-essential cookies using the banner
          shown on your first visit. You can also control cookies through
          your browser settings — most browsers let you block or delete
          cookies, though this may affect site functionality.
        </p>
      </LegalSection>

      <LegalSection title="4. Third-party cookies">
        <p>
          Some features, such as embedded maps or analytics tools, may set
          cookies from third-party providers. These are governed by the
          respective third party&apos;s own privacy and cookie policies.
        </p>
      </LegalSection>

      <LegalSection title="5. Changes to this policy">
        <p>
          We may update this policy periodically. Changes will be posted on
          this page with a revised date.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>
          Questions about our use of cookies can be sent to{" "}
          <a href="mailto:privacy@nexorasolutions.com" className="font-medium text-primary hover:underline">
            privacy@nexorasolutions.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
