// // // 'use client'

// // // import React, { useEffect, useState } from 'react'
// // // import { motion } from 'framer-motion'

// // // const CursorBlob = () => {
// // //   const [position, setPosition] = useState({ x: 0, y: 0 })

// // //   useEffect(() => {
// // //     const move = (e: MouseEvent) => {
// // //       setPosition({ x: e.clientX, y: e.clientY })
// // //     }
// // //     window.addEventListener('mousemove', move)
// // //     return () => window.removeEventListener('mousemove', move)
// // //   }, [])

// // //   return (
// // //     <motion.div
// // //       className="fixed top-0 left-0 w-32 h-32 rounded-full bg-purple-500/20 blur-2xl pointer-events-none z-[999]"
// // //       animate={{
// // //         x: position.x - 64, // center offset (w/2)
// // //         y: position.y - 64,
// // //       }}
// // //       transition={{
// // //         type: 'spring',
// // //         stiffness: 100,
// // //         damping: 20,
// // //       }}
// // //     />
// // //   )
// // // }

// // // export default CursorBlob


// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { motion } from 'framer-motion'

// // const CursorLens = () => {
// //   const [position, setPosition] = useState({ x: 0, y: 0 })

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       setPosition({ x: e.clientX, y: e.clientY })
// //     }

// //     window.addEventListener('mousemove', handleMouseMove)
// //     return () => window.removeEventListener('mousemove', handleMouseMove)
// //   }, [])

// //   return (
// //     <motion.div
// //       className="fixed top-0 left-0 w-24 h-24 rounded-full overflow-hidden border border-white/20 z-[999] pointer-events-none mix-blend-difference"
// //       animate={{
// //         x: position.x - 48, // offset by half width (24 tailwind = 96px, so 48)
// //         y: position.y - 48,
// //       }}
// //       transition={{
// //         type: 'spring',
// //         stiffness: 100,
// //         damping: 20,
// //       }}
// //     >
// //       <div
// //         className="w-screen h-screen scale-150 origin-top-left"
// //         style={{
// //           transform: `translate(-${position.x}px, -${position.y}px) scale(1.6)`,
// //         }}
// //       >
// //         <div className="fixed inset-0 bg-[url('/your-background.jpg')] bg-cover" />
// //       </div>
// //     </motion.div>
// //   )
// // }

// // export default CursorLens

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const CursorLens = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', move);
//     return () => window.removeEventListener('mousemove', move);
//   }, []);

//   return (
//     <motion.div
//       className="fixed w-32 h-32 rounded-full z-[9999] pointer-events-none border-2 border-white/10 backdrop-blur-sm"
//       animate={{
//         x: position.x - 64,
//         y: position.y - 64,
//       }}
//       transition={{
//         type: 'spring',
//         stiffness: 100,
//         damping: 20,
//       }}
//       style={{
//         backdropFilter: 'blur(2px) saturate(2)',
//         WebkitBackdropFilter: 'blur(2px) saturate(2)',
//       }}
//     />
//   );
// };

// export default CursorLens;

'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorTrail = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 300 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full z-[9999] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* Trailing glow circle */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-neutral-400 rounded-full z-[9998] pointer-events-none blur-2xl"
        style={{
          x: trailX,
          y: trailY,
        }}
      />
    </>
  );
};

export default CursorTrail;
