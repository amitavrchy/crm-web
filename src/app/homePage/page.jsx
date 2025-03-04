import React from 'react'
import AboutUs from "@/components/About_Us";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Vendors from "@/components/vendors";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AllJobsHomePage from '@/components/allJobsHomePage';
import ContactUsHomePage from '@/components/ContactHomePage';
import BlogsHomePage from '@/components/BlogsHomePage';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Achievements from '@/components/Achievements';
import SmallMighty from '@/components/SmallMighty';
import JobSchedule from '@/components/JobSchedule';
import Chat from '@/components/Chat';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AllJobsHomePage />
      <AboutUs />
      <BlogsHomePage />
      <Benefits />
      <Services />
      <JobSchedule />
      <Achievements />
      <Testimonials />
      <SmallMighty />
      <ContactUsHomePage />
      <Vendors />
      <Chat />
      <Footer />
    </div>
  )
}

export default HomePage