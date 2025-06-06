import React from 'react'
import { Title } from "react-head";
import HomeBanner from '../../components/HomeBanner'
import Testimonials from '../../components/Testimonial'

import StatsSection from '../../components/StatsSection'

import WhyChooseUs from '../../components/WhyChooseUs'
import HeroSection from '../../components/HeroSection'
import KnowledgeFLOSection from '../../components/KnowledgeFLOSection'



import AchievementSection from '../../components/AchievementSection'
import JobReadySection from '../../components/JobReadySection'
import SectionGreen from '../../components/SectionGreen'
import PlacementRecordsSection from '../../components/PlacementRecordsSection'
import VedioFAQSection from '../../components/VedioFAQSection';
import Certificate from '../../components/Certificate'
import Companies from '../../components/Companies'
import DomainsSection from '../../components/DomainsSection';
import TestimonialSection from '../../components/TestimonialSection';
import LearningSection from '../../components/LearningSection';
import CourseGallerySection from '../../components/CourseGallerySection';
// import ReferMeGroupSection from '../../components/ReferMeGroupSection'
// import BusinessSection from '../../components/BusinessSection'
// import Identity from '../../components/Identity'

const Home = () => {
  return (
    <>
      <Title>Refer Me Group</Title>
      <main className='w-full'>
        <HomeBanner />
        <Companies />

        <WhyChooseUs />

        {/* <Identity/> */}
        <TestimonialSection />

        <CourseGallerySection />
        <HeroSection />
        <LearningSection />
        {/* <BusinessSection/> */}
        <KnowledgeFLOSection />
        <JobReadySection />

        <AchievementSection />
        <VedioFAQSection />
        {/* <SectionGreen/> */}
        <Certificate />
        {/* <ReferMeGroupSection/> */}

        {/* <Testimonials/> */}

        <DomainsSection />
        <PlacementRecordsSection />

      </main>
    </>
  )
}

export default Home