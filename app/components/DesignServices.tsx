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

const DesignServices = () => {
  return (
  <section  id='services' className="bg-black text-white px-4 py-16 md:px-8 lg:px-20 border-b-2 pb-24 border-b-neutral-600">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.6 }}
        >
              <div className={`flex items-center justify-center my-5 object-cover `}>
       <StylishBadge className='border border-gray-700 '>Design Services</StylishBadge>
       </div>
       <div className='md:flex space-y-10 md:space-y-0 justify-between md:px-10  px-2items-center'>
       <div className='items-left justify-end text-left'>
         <h2 className="text-4xl md:text-5xl font-bold flex items-center ">
            <span className="text-white mr-2">Design </span>
            <span className="text-gray-400">Services</span>
          </h2>
          <p className="text-gray-400 mt-2 sm:text-xs md:text-md">
          Explore a suite of design services to elevate your brand and<br/> user experience from stunning websites to productive Mobile App Development
          </p>
          </div>
            <a
          href="https://wa.me/2348146447551"
          target="_blank"
          rel="noopener noreferrer" className="px-6  py-3 h-10 sm:text-xs md:text-md rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
              Contact Now
            </a>
        </div>
        </motion.div>
      </div>
      
        <ServicesSection />
    </section>
  );
}

export default DesignServices;




 function ServicesSection() {
  return (
  <div
      className=" relative overflow-hidden  group cursor-pointer z-20 bg-transparent p-4 md:p-8 "
    >
      <div className="mx-auto max-w-7xl space-y-20 md:space-y-10 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:max-h-[110vh] sm:pb-20 md:pb-0">
            {/* left content */}
   <div className="grid grid-cols-1  md:grid-rows-2  md:max-h-[90vh]">
                    <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 space-y-5" >
                        <AnimateCard
                        className="relative h-110 gap-10 md:gap-0 md:h-100 p-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 grid grid-rows-3">
                            <ServicesDetails 
                            title="UI/UX Design" 
                            description= "Creating intuitive, user-friendly interfaces that enhance user experience and drive engagement, tailored to your brand's needs"  
                            index={1}/>
                                <img
                                src="/back2.png"
                                alt="Dashboard Template"
                                className="w-full h-full object-cover rounded-2xl opacity-60 row-span-2 "
                            />
                        </AnimateCard>
                    <AnimateCard
                    className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-40 p-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900" >
                        <ServicesDetails
                            title= "Web Development"
                            description="Building robust, scalable, and high-performance web applications that deliver exceptional user experiences and meet business goals"
                             index= {2} />
                    </AnimateCard>
               
                    </div>
                    </div>
            {/* right content */}

                    <div className="grid grid-cols-1 gap-4 md:grid-rows-2  md:max-h-[90vh] ">
                    <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 space-y-5" >
                   < AnimateCard     
                    className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-40 p-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900" >
                        <ServicesDetails
                            title="Automation Services"
                            description="Streamline your workflows and boost productivity by automating repetitive tasks and integrating your favorite tools using platforms like n8n, Zapier, and Make.com."
                            index={3}
                        />
                    </AnimateCard>
                   <AnimateCard
                    className="relative h-100 md:h-100 p-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 grid grid-rows-3"
                    >
                    <ServicesDetails
                        title="Website Design"
                        description="Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand"
                        index={4}
                    />
                    
                    <InfiniteCarousel />
                    </AnimateCard>
                    </div>
                    </div>
          </div>

        <CarouselBadgeGroup/>
      </div>
    </div>
  );
}




