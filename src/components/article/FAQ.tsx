import type { FAQItem } from "@/data/articles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section id="faq" className="not-prose">
      <h2 className="mb-6 text-2xl font-semibold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="px-5">
            <AccordionTrigger className="text-left text-base font-medium">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
