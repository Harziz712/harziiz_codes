import { motion } from 'framer-motion';
import { StylishBadge } from './ui/Badge';
import { AnimateCard, ServicesDetails } from './ui/Card';
import InfiniteCarousel, { CarouselBadgeGroup } from './ui/Carousels';


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
  <section className="bg-black text-white px-4 py-16 md:px-8 lg:px-20 border-b-2 pb-24 border-b-neutral-600">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.6 }}
        >
              <div className={`flex items-center justify-center my-5 object-cover `}>
       <StylishBadge className='border border-gray-700 '>Design Services</StylishBadge>
       </div>
       <div className='flex justify-between px-10 items-center'>
       <div className='items-left justify-end text-left'>
          <h2 className="text-4xl font-bold">
            <span className="text-white">Design </span>
            <span className="text-gray-400">Services</span>
          </h2>
          <p className="text-gray-400 mt-2 sm:text-xs md:text-md">
          Explore a suite of design services to elevate your brand and<br/> user experience from stunning websites to productive Mobile App Development
          </p>
          </div>
             <button className="px-6 py-3 sm:text-xs md:text-md rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
              Contact Now
            </button>
        </div>
        </motion.div>
      </div>
      
    </section>
  );
}

export default HappyClients;

