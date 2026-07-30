import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/sections/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the Nexora Solutions website and services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="July 21, 2026">
      <p>
        These Terms & Conditions (&quot;Terms&quot;) govern your use of the
        Nexora Solutions website and the services we provide. By using our
        site or engaging our services, you agree to these Terms.
      </p>

      <LegalSection title="1. Services">
        <p>
          Nexora Solutions provides software design and development
          services, including but not limited to web development, UI/UX
          design, AI solutions, and related consulting. The specific scope,
          timeline, and deliverables for any engagement are defined in a
          separate written proposal or contract.
        </p>
      </LegalSection>

      <LegalSection title="2. Quotes and estimates">
        <p>
          Quotes provided through our website or in initial conversations
          are estimates based on the information available at the time.
          Final pricing is confirmed in a signed proposal or statement of
          work before work begins.
        </p>
      </LegalSection>

      <LegalSection title="3. Intellectual property">
        <p>
          Upon full payment, clients receive ownership of the custom code,
          designs, and deliverables created specifically for their project,
          unless otherwise specified in a project agreement. Nexora
          Solutions retains the right to showcase completed work in its
          portfolio unless a confidentiality agreement states otherwise.
        </p>
      </LegalSection>

      <LegalSection title="4. Client responsibilities">
        <p>
          Clients are responsible for providing timely feedback, content,
          and access needed to complete a project on schedule. Delays in
          client responsiveness may affect project timelines.
        </p>
      </LegalSection>

      <LegalSection title="5. Payment terms">
        <p>
          Payment schedules are outlined in individual project agreements.
          Late payments may result in paused work until accounts are
          brought current.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation of liability">
        <p>
          To the fullest extent permitted by law, Nexora Solutions is not
          liable for indirect, incidental, or consequential damages arising
          from the use of our services or website.
        </p>
      </LegalSection>

      <LegalSection title="7. Termination">
        <p>
          Either party may terminate an active engagement as outlined in
          the relevant project agreement. Fees for work completed up to the
          termination date remain payable.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing law">
        <p>
          These Terms are governed by the laws of the jurisdiction in which
          Nexora Solutions is registered, without regard to conflict-of-law
          principles.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:legal@nexorasoln.com" className="font-medium text-primary hover:underline">
            legal@nexorasoln.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
