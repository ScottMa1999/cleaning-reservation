// Data
import RecentProjectsData from "../data/RecentProjectsData";
import { useState } from "react";

// Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';


function HomeProjects() {
  // states
  const [recentProjects, setRecentProjects] = useState(RecentProjectsData);
  const recentProjectImages: string[] = recentProjects.map(project => project?.src).flat().filter((project, index) => index <= 6);
  
  return <section className="HomeProjects">
    <h1 className="HomeProject-title">Recent Projects</h1>
    <Swiper modules={[Pagination]} grabCursor={true} pagination={true} style={{overflow: "visible"}}>
      {
      recentProjectImages.length > 0 && recentProjectImages.map(src => (
        <SwiperSlide key={src}>
          <img src={src} alt={src} />
        </SwiperSlide>
      ))
      }
    </Swiper>
  </section>
}

export default HomeProjects;
