"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import Products from '../../components/Products';
import { useLeadForm } from '../../lib/LeadFormContext';

function ProductsContent() {
  const { openLeadForm } = useLeadForm();
  return <Products onOpenLeadForm={openLeadForm} />;
}

export default function ProductsPage() {
  return (
    <PageLayout>
      <ProductsContent />
    </PageLayout>
  );
}
