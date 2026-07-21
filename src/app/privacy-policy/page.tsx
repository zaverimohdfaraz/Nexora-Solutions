import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/sections/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nexora Solutions collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 21, 2026">
      <p>
        Nexora Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
        respects your privacy. This policy explains what information we
        collect, how we use it, and the choices you have.
      </p>

      <LegalSection title="1. Information we collect">
        <p>
          We collect information you provide directly to us, such as your
          name, email address, phone number, and project details when you
          fill out a contact or quote request form. We also collect limited
          technical data automatically, such as browser type, device
          information, and pages visited, to help us understand how our site
          is used.
        </p>
      </LegalSection>

      <LegalSection title="2. How we use your information">
        <p>
          We use the information we collect to respond to inquiries, provide
          quotes, deliver services, improve our website, and send
          occasional updates if you&apos;ve subscribed to our newsletter. We
          do not sell your personal information to third parties.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies and tracking">
        <p>
          We use cookies and similar technologies to remember your
          preferences and understand site usage. You can control cookie
          preferences through the banner shown on your first visit or your
          browser settings. See our{" "}
          <a href="/cookies/" className="font-medium text-primary hover:underline">
            Cookies Policy
          </a>{" "}
          for details.
        </p>
      </LegalSection>

      <LegalSection title="4. Data sharing">
        <p>
          We may share information with trusted service providers who help
          us operate our business (such as email delivery or hosting
          providers), under confidentiality obligations. We may also
          disclose information if required by law.
        </p>
      </LegalSection>

      <LegalSection title="5. Data retention">
        <p>
          We retain personal information only as long as necessary to
          fulfill the purposes described in this policy, unless a longer
          retention period is required by law.
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>
          Depending on your location, you may have the right to access,
          correct, or delete your personal information, or to object to
          certain processing. To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@nexorasolutions.com" className="font-medium text-primary hover:underline">
            privacy@nexorasolutions.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We&apos;ll
          post any changes on this page with an updated revision date.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact us">
        <p>
          If you have questions about this policy, reach out at{" "}
          <a href="mailto:privacy@nexorasolutions.com" className="font-medium text-primary hover:underline">
            privacy@nexorasolutions.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
