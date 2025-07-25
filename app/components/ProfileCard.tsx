'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Github, Linkedin, Download } from 'lucide-react'
import { ExperienceItem } from './ui/ExperienceItem'
import { SocialIcon } from './ui/SocialIcons'
import { Badge, StylishBadge } from './ui/Badge'
import CircularText from './ui/CircularText'
import RotatingText from './ui/RotatingText'

const ProfileCard = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  }

  return (
    <div id='profile' className="min-h-screen bg-black text-white pb-24 border-b-2 border-b-neutral-600">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          custom={0.1}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center my-5">
            <StylishBadge className="border border-neutral-700">Software Engineer</StylishBadge>
          </div>
          <motion.h1
            variants={itemVariants}
            custom={0.2}
            className="text-4xl sm:text-5xl lg:text-6xl font-light flex w-full justify-center mb-6"
          >
            Akanbi AbdulAzeez,  <span className="text-neutral-500">Your</span>   <RotatingText
            texts={[' Developer ', 'Designer', 'Automation Gee ', 'Engineer']}
            mainClassName="px-2 sm:px-2 md:px-3 text-neutral-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          /> 
          </motion.h1>
  
          <motion.p
            variants={itemVariants}
            custom={0.3}
            className="text-neutral-400 text-lg  max-w-2xl mx-auto"
          >
            Brief initial presentation of myself and my previous experiences.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="flex justify-center items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-8">
            {/* Left Column */}
            <motion.div
              variants={itemVariants}
              custom={0.4}
              className=" md:col-span-3 bg-neutral-900 p-4 rounded-2xl flex flex-col space-y-6"
            >
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="w-full"
              >
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="/profileimg.png"
                    alt="Profile"
                    className="w-full h-auto max-h-[400px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <StylishBadge className="border border-neutral-700">Available for work</StylishBadge>
                  </div>
                </div>
              </motion.div>

              {/* About */}
              <motion.div
                  variants={itemVariants}
                custom={0.5}
                className="flex justify-around w-full"
              >
              <motion.div
                variants={itemVariants}
                custom={0.5}
                className="space-y-4 w-2/3"
              >
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                  className="text-2xl font-medium"
                >
                  Hello I am Akanbi AbdulAzeez
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false }}
                  className="text-neutral-400 text-sm"
                >
                  Software Engineer Based in Nigeria.
                </motion.p>

                {/* Socials */}
                <div className="flex space-x-3">
                  <SocialIcon icon={Twitter}   href="https://x.com/harziizdevps"               delay={0.6} />
                  <SocialIcon icon={Instagram} href="https://www.instagram.com/harzzie711/"    delay={0.7} />
                  <SocialIcon icon={Linkedin}  href="https://www.linkedin.com/in/akanbiazeez/" delay={0.8} />
                  <SocialIcon icon={Github}    href="https://github.com/harziz712"             delay={0.8} />
                </div>

                {/* Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: false }}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white rounded-full font-medium border border-neutral-700 hover:text-white hover:bg-neutral-600 cursor-pointer"
                >
                <a
                  href="/AKANBI_ABDULAZEEZ_KOLAWOLE_CV.pdf"
                  download="AKANBI_ABDULAZEEZ_KOLAWOLE_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 "
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
         
                </motion.button>
              </motion.div>

                       <CircularText
                    text="HIRE*ME*NOW*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class  md:w-1/3"
                  />
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={itemVariants}
              custom={0.5}
              className="md:col-span-4 bg-neutral-900 p-6 rounded-2xl space-y-8"
            >
              {/* Intro */}
              <motion.div
                variants={itemVariants}
                custom={0.6}
                className="space-y-4"
              >
                <p className="text-neutral-300 text-sm md:text-md leading-relaxed">
                  I'm Akanbi AbdulAzeez, a dedicated Web Developer & Designer based in the vibrant city of Lagos, Nigeria. I specialize in creative design with seamless technical execution to craft exceptional digital experiences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge delay={0.4} >Web Development</Badge>
                  <Badge delay={0.5}>Javascript</Badge>
                  <Badge delay={0.6}>Mobile App Development</Badge>
                  <Badge delay={0.7}>UI/UX Design</Badge>
                  <Badge delay={0.8}>Next.js</Badge>
                  <Badge delay={0.9}>React</Badge>
                  <Badge delay={1.0}>Webflow</Badge>
                  <Badge delay={1.1}>Squarespace</Badge>
                  <Badge delay={1.2}>Wix</Badge>
                  <Badge delay={1.3}>Wordpress</Badge>
                  <Badge delay={1.4}>Framer</Badge>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                variants={itemVariants}
                custom={0.7}
                className="space-y-4"
              >
                <ExperienceItem role="Freelance" company="GreenLeaf Co" year="2021" delay={0.6} />
                <ExperienceItem role="Mobile App Development" company="Acqua.ng" year="2024" delay={0.7} />
                <ExperienceItem role="Web Developer" company="AirtimeEase" year="2023" delay={0.8} />
                <ExperienceItem role="UI/UX Design" company="OJAA Digital Marketplace" year="2024" delay={0.9} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileCard
