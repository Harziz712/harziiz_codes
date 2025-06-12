import { Card } from "./Card";
import React from "react";

// interface PortfolioGridProps {
//   width?: string;
//   height?: string;
// }

// const PortfolioGrid: React.FC<PortfolioGridProps> = ({ width = "100%", height = "100vh" }) => {
//   return (
//     <div
//       className="z-20 bg-transparent p-4 md:p-8 "
//       style={{ width, height, minHeight: "100vh" }}
//     >
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             {/* left content */}
//             <div className="grid grid-cols-1 gap-4 md:grid-rows-2">
//           <Card className="md:col-span-2 lg:col-span-2 xl:col-span-2" delay={0.1}>
//             <div className="relative h-80 md:h-120 p-3">
//               <img
//                 src="/back1.png"
//                 alt="Dashboard Template"
//                 className="w-full h-full object-cover rounded-2xl opacity-60 "
//               />
//             </div>
//           </Card>

//         <Card className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-64 p-3" delay={0.4}>
//             <img
//               src="/back2.png"
//               alt="Landing Page Template"
//               className="w-full h-full object-cover rounded-2xl opacity-60 "
//             />
//           </Card>
//         </div>
//         {/* right content */}
//             <div className="grid grid-cols-1 gap-4 md:grid-rows-2">

//           <Card className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-64 p-3" delay={0.4}>
//             <img
//               src="/back3.png"
//               alt="Landing Page Template"
//               className="w-full h-full object-cover rounded-2xl opacity-60 "
//             />
//           </Card>

//           <Card className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-120 -top-56 p-3" delay={0.7}>
//             <img
//               src="/back4.png"
//               alt="Creative Agency Template"
//               className="w-full h-full object-cover rounded-2xl opacity-60 "
//             />
//           </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioGrid;




export const PortfolioGrid = () => {
  return (
    <div
      className="z-20 bg-transparent p-4 md:p-8 "
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* left content */}
            <div className="grid grid-cols-1 gap-4 md:grid-rows-3 ">
              <Card className="row-span-2 p-3" delay={0.1}>
              <img
                src="/back1.png"
                alt="Dashboard Template"
                className="w-full h-full object-cover rounded-2xl opacity-60 "
              />
          </Card>

        <Card className="row-span-1 h-64 p-3" delay={0.4}>
            <img
              src="/back2.png"
              alt="Landing Page Template"
              className="w-full h-full object-cover rounded-2xl opacity-60 "
            />
          </Card>
        </div>
        {/* right content */}
        <div className="grid grid-cols-1 gap-4 md:grid-rows-3 ">
          <Card className="row-span-1 h-64 p-3"delay={0.4}>
            <img
              src="/back3.png"
              alt="Landing Page Template"
              className="w-full h-full object-cover rounded-2xl opacity-60 "
            />
          </Card>

          <Card className="row-span-2 p-3" delay={0.7}>
            <img
              src="/back4.png"
              alt="Creative Agency Template"
              className="w-full h-full object-cover rounded-2xl opacity-60 "
            />
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
