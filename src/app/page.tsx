// src/app/page.tsx
import { Metadata } from "next";
import { CourseData } from "@/types/course";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Instructors from "@/components/Instructors";
import CourseFeatures from "@/components/CourseFeatures";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import CourseDetails from "@/components/CourseDetails";
import MediaCarousel from "@/components/MediaCarousel";
import CtaSidebar from "@/components/CtaSidebar";
import Checklist from "@/components/Checklist";
import CourseExclusiveFeatures from "@/components/CourseExclusiveFeatures";

// Data fetching function, now defaults to 'en'
async function getCourseData(
  lang: "en" | "bn" = "en"
): Promise<CourseData | null> {
  try {
    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch course data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  // Fetch 'en' data for metadata
  const data = await getCourseData("en");

  return {
    title: data?.seo?.title ?? "IELTS Course by Munzereen Shahid",
    description:
      data?.seo?.description ??
      "Join our IELTS Course today to achieve your desired band score.",
  };
}

export default async function Home() {
  // Fetch 'en' data for the page
  const courseData = await getCourseData("en");

  if (!courseData) {
    return (
      <main className="max-w-6xl mx-auto p-8 text-center">
        Failed to load course data. Please try again later.
      </main>
    );
  }

  const instructorSection = courseData?.sections?.find(
    (sec) => sec.type === "instructors"
  );
  const featuresSection = courseData?.sections?.find(
    (sec) => sec.type === "features"
  );
  const pointersSection = courseData?.sections?.find(
    (sec) => sec.type === "pointers"
  );
  const aboutSection = courseData?.sections?.find(
    (sec) => sec.type === "about"
  );
  const exclusiveFeaturesSection = courseData?.sections?.find(
    (sec) => sec.type === "feature_explanations"
  );

  return (
    <main className="max-w-6xl mx-auto p-4 lg:p-8 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Title title={courseData?.title ?? "Course Title"} />
          <Description htmlContent={courseData?.description ?? ""} />
          {instructorSection && <Instructors section={instructorSection} />}
          {featuresSection && <CourseFeatures section={featuresSection} />}
          {pointersSection && <WhatYouWillLearn section={pointersSection} />}
          {exclusiveFeaturesSection && (
            <CourseExclusiveFeatures section={exclusiveFeaturesSection} />
          )}
          {aboutSection && <CourseDetails section={aboutSection} />}
        </div>

        <div className="lg:col-span-1 space-y-4">
          <MediaCarousel media={courseData?.media ?? []} />
          <div className="bg-white border border-gray-200 rounded-md  p-6">
            <CtaSidebar ctaText={courseData?.cta_text?.name ?? "Enroll Now"} />
            <Checklist items={courseData?.checklist ?? []} />
          </div>
        </div>
      </div>
    </main>
  );
}
