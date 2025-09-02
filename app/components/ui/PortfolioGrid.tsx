import { Card } from "./Card";
import React from "react";

export const PortfolioGrid = () => {
  return (
    <div className="z-20 bg-transparent p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* left content */}
          <div className="grid grid-cols-1 gap-4 md:grid-rows-3">
            {/* Gym Hub Project */}
            <Card
              className="row-span-2 p-3"
              delay={0.1}
              link="https://zeezgymhub.vercel.app/"
              github="https://github.com/Harziz712/fitmode-demo88"
              description="Zeez GymHub is a modern fitness platform designed for fitness enthusiasts and trainers. The project allows users to explore curated workout plans, nutritional guidance, and fitness programs in an engaging and visually appealing interface. Built with responsiveness in mind, it delivers a seamless experience across devices, and its interactive UI makes it easy for users to navigate, track goals, and stay motivated."
            >
              <img
                src="/fit.png"
                alt="Dashboard Template"
                className="w-full h-full object-cover rounded-2xl opacity-60"
              />
            </Card>

            {/* Apple Clone Project */}
            <Card
              className="row-span-1 h-64 p-3"
              delay={0.4}
              link="https://apple-website-5rki.onrender.com/"
              github="https://github.com/Harziz712/Apple_website"
              description="This Apple website clone replicates the sleek design and user experience of Apple's official landing page. It highlights responsive layouts, smooth transitions, and elegant typography inspired by Apple's minimalist branding. The site is a demonstration of recreating a professional-grade website with pixel-perfect detail, optimized performance, and modern frontend best practices."
            >
              <img
                src="/apple.png"
                alt="Landing Page Template"
                className="w-full h-full object-cover rounded-2xl opacity-60"
              />
            </Card>
          </div>

          {/* right content */}
          <div className="grid grid-cols-1 gap-4 md:grid-rows-3">
            {/* Housify Project */}
            <Card
              className="row-span-1 h-64 p-3"
              delay={0.4}
              link="http://housify-cehf.onrender.com/"
              github="https://github.com/Harziz712/housify"
              description="Housify is a real estate web application tailored for showcasing properties with clarity and style. It provides a clean and responsive design where users can explore property listings, images, and descriptions effortlessly. Built as a modern housing showcase, it reflects how real estate agencies can present their offerings online with professionalism and user-friendly navigation."
            >
              <img
                src="housify.png"
                alt="Landing Page Template"
                className="w-full h-full object-cover rounded-2xl opacity-60"
              />
            </Card>

            {/* Personal Portfolio */}
            <Card
              className="row-span-2 p-3"
              delay={0.7}
              link="https://harziiz-me.vercel.app/"
              github="https://github.com/Harziz712/HarziizME"
              description="This is my personal portfolio website, designed to showcase my skills, projects, and services as a software developer. It combines aesthetic animations, responsive layouts, and clean typography to provide an engaging experience for visitors. The portfolio highlights my journey, technical expertise, and creative projects, while also including clear calls to action for potential clients and collaborators to connect with me."
            >
              <img
                src="/zeez.png"
                alt="Creative Agency Template"
                className="w-full h-full object-cover rounded-2xl opacity-60"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
