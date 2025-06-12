import { motion } from 'framer-motion';
import { FaLaptopCode, FaPenNib, FaFigma, FaPaintBrush } from 'react-icons/fa';
import { StylishBadge } from './ui/Badge';
import { AnimateCard, ServicesDetails } from './ui/Card';


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
          <p className="text-gray-400 mt-2 text-md">
          Explore a suite of design services to elevate your brand and<br/> user experience from stunning websites to productive Mobile App Development
          </p>
          </div>
                <button className="bg-white text-black px-3 py-1.5 rounded-full text-md font-medium">
        Contact Now
        </button>
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
      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:max-h-[110vh]">
            {/* left content */}
   <div className="grid grid-cols-1  md:grid-rows-2  md:max-h-[110vh]">
                    <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 space-y-5" >
                        <AnimateCard
                        className="relative h-80 md:h-120 p-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
                            <ServicesDetails 
                            title="UI/UX Design" 
                            description= "Creating intuitive, user-friendly interfaces that enhance user experience and drive engagement, tailored to your brand's needs"  
                            index={1}/>
                                <img
                                src="/back1.png"
                                alt="Dashboard Template"
                                className="w-full h-full object-cover rounded-2xl opacity-60 "
                            />
                        </AnimateCard>
                    <AnimateCard
                    className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-64 p-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900" >
                        <ServicesDetails
                            title= "Web Development"
                            description="Building robust, scalable, and high-performance web applications that deliver exceptional user experiences and meet business goals"
                             index= {2} />
                    </AnimateCard>
               
                    </div>
                    </div>
            {/* right content */}

                    <div className="grid grid-cols-1 gap-4 md:grid-rows-2  md:max-h-[110vh] ">
                    <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 space-y-5" >
                   < AnimateCard     
                    className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-64 p-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900" >
                        <ServicesDetails 
                        title = "Website Design"
                         description = "Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand"
                         index = {3}
                        />
                    </AnimateCard>
                        <AnimateCard
                        className="relative h-80 md:h-120 p-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
                            <ServicesDetails
                            title = "Framer Design"
                            description = "Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience"
                            index = {4}
                            />
                                <img
                                src="/back1.png"
                                alt="Dashboard Template"
                                className="w-full h-full object-cover rounded-2xl opacity-60 "
                            />
                        </AnimateCard>
                    </div>
                    </div>
          </div>

      </div>
    </div>
  );
}




