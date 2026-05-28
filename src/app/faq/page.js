"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import FAQ from '../../components/FAQ';
import contentData from '../../data/content.json';

export default function FAQPage() {
  return (
    <PageLayout>
      <FAQ data={contentData.faq} />
    </PageLayout>
  );
}
