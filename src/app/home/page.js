"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import Hero from '../../components/Hero';
import Business from '../../components/Business';
import { useLeadForm } from '../../lib/LeadFormContext';
import contentData from '../../data/content.json';

function HomeContent() {
  const { openLeadForm } = useLeadForm();
  return (
    <>
      <Hero data={contentData.hero} onOpenLeadForm={openLeadForm} />
      <Business />
    </>
  );
}

export default function HomePage() {
  return (
    <PageLayout>
      <HomeContent />
    </PageLayout>
  );
}
