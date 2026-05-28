"use client";

import React, { createContext, useContext } from 'react';

export const LeadFormContext = createContext({
  openLeadForm: () => {}
});

export const useLeadForm = () => useContext(LeadFormContext);
