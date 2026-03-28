import React from 'react';
import { Hero } from '../components/Hero';
import { FenceGrid } from '../components/FenceGrid';
import { EducationSection, InstallationSection } from '../components/Sections';
import { HeightGuide, CTA } from '../components/CTA_Footer';

export const Home = () => {
  return (
    <>
      <Hero />
      <FenceGrid />
      <EducationSection />
      <InstallationSection />
      <HeightGuide />
      <CTA />
    </>
  );
};
