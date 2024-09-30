import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@cmdrs/ui";

type Props = {};

const Faqs = (props: Props) => {
  return (
    <section className="max-w-[768px] mx-auto py-6 px-6 md:px-0">
      <h2 className="text-center text-fg-base font-semibold text-2xl mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-2xs text-fg-subtle mb-6">
        Here are some of the most common questions we receive from our users.
      </p>

      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger type="not-started">
            How can I ensure my website is accessible?
          </AccordionTrigger>
          <AccordionContent>
            The best way to ensure your website is accessible is to follow the
            Web Content Accessibility Guidelines (WCAG) and use semantic HTML.
            Additionally, you can use tools like screen readers to test your
            website's accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger type="in-progress">
            What are the best practices for website accessibility?
          </AccordionTrigger>
          <AccordionContent>
            To ensure your website is accessible, you should follow the Web
            Content Accessibility Guidelines (WCAG), use semantic HTML, and test
            your website with tools like screen readers. Additionally, adhering
            to the WAI-ARIA design pattern can help improve accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger type="completed">
            How can I improve my website's accessibility?
          </AccordionTrigger>
          <AccordionContent>
            To improve your website's accessibility, you can follow the Web
            Content Accessibility Guidelines (WCAG), use semantic HTML, and test
            your website with tools like screen readers. Additionally, adhering
            to the WAI-ARIA design pattern can help improve accessibility.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 className="text-center text-fg-base font-semibold text-2xl mb-2 mt-12">
        Frequently Asked Questions 2
      </h2>
      <p className="text-center text-2xs text-fg-subtle mb-6">
        Here are some of the most common questions we receive from our users.
      </p>

      <Accordion type="single" variant="progress">
        <AccordionItem value="item-1">
          <AccordionTrigger type="not-started">
            How can I ensure my website is accessible?
          </AccordionTrigger>
          <AccordionContent>
            The best way to ensure your website is accessible is to follow the
            Web Content Accessibility Guidelines (WCAG) and use semantic HTML.
            Additionally, you can use tools like screen readers to test your
            website's accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger type="in-progress">
            What are the best practices for website accessibility?
          </AccordionTrigger>
          <AccordionContent>
            To ensure your website is accessible, you should follow the Web
            Content Accessibility Guidelines (WCAG), use semantic HTML, and test
            your website with tools like screen readers. Additionally, adhering
            to the WAI-ARIA design pattern can help improve accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger type="completed">
            How can I improve my website's accessibility?
          </AccordionTrigger>
          <AccordionContent>
            To improve your website's accessibility, you can follow the Web
            Content Accessibility Guidelines (WCAG), use semantic HTML, and test
            your website with tools like screen readers. Additionally, adhering
            to the WAI-ARIA design pattern can help improve accessibility.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 className="text-center text-fg-base font-semibold text-2xl mb-2 mt-12">
        Frequently Asked Questions 3
      </h2>
      <p className="text-center text-2xs text-fg-subtle mb-6">
        Here are some of the most common questions we receive from our users.
      </p>

      <Accordion type="single" variant="pills-group">
        <AccordionItem value="item-1">
          <AccordionTrigger type="not-started">
            How can I ensure my website is accessible?
          </AccordionTrigger>
          <AccordionContent>
            The best way to ensure your website is accessible is to follow the
            Web Content Accessibility Guidelines (WCAG) and use semantic HTML.
            Additionally, you can use tools like screen readers to test your
            website's accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger type="in-progress">
            What are the best practices for website accessibility?
          </AccordionTrigger>
          <AccordionContent>
            To ensure your website is accessible, you should follow the Web
            Content Accessibility Guidelines (WCAG), use semantic HTML, and test
            your website with tools like screen readers. Additionally, adhering
            to the WAI-ARIA design pattern can help improve accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger type="completed">
            How can I improve my website's accessibility?
          </AccordionTrigger>
          <AccordionContent>
            To improve your website's accessibility, you can follow the Web
            Content Accessibility Guidelines (WCAG), use semantic HTML, and test
            your website with tools like screen readers. Additionally, adhering
            to the WAI-ARIA design pattern can help improve accessibility.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faqs;
