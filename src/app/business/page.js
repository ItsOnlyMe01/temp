"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import Business from '../../components/Business';

export default function BusinessPage() {
  return (
    <PageLayout>
      <div className="pt-10">
        <Business inlineForm={true} />
      </div>
    </PageLayout>
  );
}
