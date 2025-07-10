import { Card } from "./Card";
import React from "react";

export const PortfolioGrid = () => {
  return (
    <div
      className="z-20 bg-transparent  p-4 md:p-8 "
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* left content */}
            <div className="grid grid-cols-1 gap-4 md:grid-rows-3 ">
              <Card className="row-span-2 p-3" delay={0.1}>
              <img
                src="/fit.png"
                alt="Dashboard Template"
                className="w-full h-full object-cover rounded-2xl opacity-60 "
              />
          </Card>

        <Card className="row-span-1 h-64 p-3" delay={0.4}>
            <img
              src="/apple.png"
              alt="Landing Page Template"
              className="w-full h-full object-cover rounded-2xl opacity-60 "
            />
          </Card>
        </div>
        {/* right content */}
        <div className="grid grid-cols-1 gap-4 md:grid-rows-3 ">
          <Card className="row-span-1 h-64 p-3"delay={0.4}>
            <img
              src="housify.png"
              alt="Landing Page Template"
              className="w-full h-full object-cover rounded-2xl opacity-60 "
            />
          </Card>

          <Card className="row-span-2 p-3" delay={0.7}>
            <img
              src="/zeez.png"
              alt="Creative Agency Template"
              className="w-full hover:scale-0.8 h-full object-cover rounded-2xl opacity-60 "
            />
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
