
import React from 'react';

export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
}

export interface ServiceFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  hero: {
    title: string;
    subtitle: string;
  };
  problemSolution: {
    problem: string;
    solution: string;
    result: string;
  };
  features: ServiceFeature[];
  visual: React.ElementType;
  faqs: FAQItem[];
}

export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  tags: string[];
  imageUrl: string;
  metric: string;
  details: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}
