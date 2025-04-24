import Hero from "@/app/component/home/Hero";
import OurStory from "@/app/component/home/OurStory";
import WhatWeDo from "@/app/component/home/WhatWeDo";
import HowItWorks from "@/app/component/home/HowItWorks";
import WhyDonate from "@/app/component/home/WhyDonate";
import BloodDonationEventsPage from "@/app/component/home/BloodDonationEventsPage";
import FindDonationCenter from "@/app/component/home/FindDonationCenter";
import TestimonialsSection from "@/app/component/home/TestimonialsSection";
import BlogUpdates from "@/app/component/home/BlogUpdates";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <OurStory />
        <WhatWeDo />
        <HowItWorks />
        <WhyDonate />
        <BloodDonationEventsPage />
        <FindDonationCenter />
        <TestimonialsSection />
        <BlogUpdates />
      </main>
    </div>
  );
}
