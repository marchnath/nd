"use client";
import { NewsletterSection } from "@/components/blocks/newsletter-section";

async function mockSubscribe(email) {
  // API request simulation
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email.includes("error")) {
    return { success: false, error: "Something went wrong!" };
  }

  return { success: true };
}

function NewsletterSectionDemo() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <NewsletterSection
        title="Join our newsletter"
        onSubscribe={mockSubscribe}
        className="text-white z-50"
      />
    </div>
  );
}

export { NewsletterSectionDemo };
