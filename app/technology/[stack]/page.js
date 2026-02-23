
"use client";

import { useParams } from 'next/navigation';
import TechPage from "@/app/_Components/TechPage";
import ScrollToTop from '@/app/_Components/ScrollToTop';
import TechnologyBanner from '@/app/_Components/TechnologyBanner';

const TechPageWrapper = () => {
  const { stack } = useParams();

  return <>
    <div className="bg-gray-900 text-white relative overflow-hidden">
      <ScrollToTop />
      <TechnologyBanner stack={stack}/>
      {stack ? <TechPage query={{ stack }} /> : <div>Loading...</div>}
    </div>
  </>;
};

export default TechPageWrapper;

