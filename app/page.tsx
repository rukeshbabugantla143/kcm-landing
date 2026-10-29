import Header from "@/components/school/Header";
import Hero from "@/components/school/Hero";
import QuickAccess from "@/components/school/QuickAccess";
import GradeExplorer from "@/components/school/GradeExplorer";
import AboutSchool from "@/components/school/AboutSchool";
import Academics from "@/components/school/Academics";
import Achievements from "@/components/school/Achievements";
import LearningApproach from "@/components/school/LearningApproach";
import Facilities from "@/components/school/Facilities";
import StudentLife from "@/components/school/StudentLife";
import Testimonials from "@/components/school/Testimonials";
import FAQ from "@/components/school/FAQ";
import AdmissionsCTA from "@/components/school/AdmissionsCTA";
import Footer from "@/components/school/Footer";
import SectionMotion from "@/components/school/SectionMotion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickAccess />
        <GradeExplorer />
        <AboutSchool />
        <Academics />
        <Achievements />
        <LearningApproach />
        <Facilities />
        <StudentLife />
        <Testimonials />
        <FAQ />
        <AdmissionsCTA />
      </main>
      <Footer />
      <SectionMotion />
    </>
  );
}
