import { motion } from 'framer-motion';
import { StylishBadge } from './ui/Badge';
import { AnimateCard, ServicesDetails } from './ui/Card';
import InfiniteCarousel, { CarouselBadgeGroup } from './ui/Carousels';
import StatsCards from './ui/StatsCards';
import ScrollStack from './ui/ScrollStack';
import TestimonialStack from './ui/TestimonialStack';


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const HappyClients = () => {
  return (
  <section id='testimonials' className="bg-black text-white px-4 py-16 md:px-8 lg:px-20 border-b-2 pb-24 grid grid-cols-1 md:grid-cols-2 border-b-neutral-600">
      <div className="text-center mb-12 h-fit sticky top-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
              <div className={`flex items-left justify-left col-span-1 my-5 object-cover `}>
       <StylishBadge className='border border-gray-700 '>Happy Clients</StylishBadge>
       </div>
       <div className='flex justify-between  items-center'>
       <div className='items-left justify-end text-left'>
          <h2 className="text-4xl md:text-5xl font-bold flex items-center ">
            <span className="text-white mr-2">Clients</span>
            <span className="text-gray-400">Love Me</span>
          </h2>
          <p className="text-gray-400 mt-2 sm:text-xs col-span-1 md:text-md lg:text-lg">
         Trusted by 100+ clients worldwide, our commitment to excellence and innovation has earned us a reputation for delivering exceptional results. From startups to established enterprises, we take pride in building lasting relationships and exceeding expectations.
          </p>
          </div>
        </div>
<StatsCards/>

         <div className="grid md:grid-cols-2 grid-cols-1 md:w-5/6 col-span-1  gap-4">
           <a   href='https://harziiz-me.vercel.app/projects' target="_blank" rel="noopener noreferrer"
        title="View Project"  className="px-4 py-3 sm:text-xs md:text-md lg:text-lg rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition">
              See All Projects
            </a>
            <a    
           href="https://wa.me/2348146447551"
          target="_blank"
          rel="noopener noreferrer" 
          className="px-4 py-3 sm:text-xs md:text-md lg:text-lg rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
              Contact Now
            </a>
          </div>
        </motion.div>
      </div>     
       
      <TestimonialStack/> 
      
    </section>
  );
}

export default HappyClients;


