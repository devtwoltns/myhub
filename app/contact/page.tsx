import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Contact | MyHub",
};

export default function ContactPage() {
  return (
    <section className="page-frame">
      <SectionHeading
        eyebrow="Contact"
        title="Keep the first version low-friction."
        description="Start with a mailto link or a lightweight form, then add storage, spam protection, and CRM wiring later."
      />
      <div className="card contact-card">
        <p className="contact-label">Preferred setup</p>
        <h3>Direct email first, API form second.</h3>
        <p>
          Put your actual email here when you are ready. If submissions need persistence later,
          wire this page to a database-backed route handler.
        </p>
        <a className="button button-primary" href="mailto:hello@example.com">
          hello@example.com
        </a>
      </div>
    </section>
  );
}
