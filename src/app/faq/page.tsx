'use client';

import PageContent from '@/components/page-content';
import { faqs } from '@/utils/faqs';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Faq() {
  return (
    <PageContent className="flex flex-col gap-4">
      <p className="text-3xl font-semibold ml-2">Perguntas frequentes</p>
      <Accordion variant="splitted">
        {faqs.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
            >
              {item.description}
            </AccordionItem>
          );
        })}
      </Accordion>
    </PageContent>
  );
}
