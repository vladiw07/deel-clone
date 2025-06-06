import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeatureCard from '../ui/FeatureCard';

const tabs = [
  {
    key: 'Deel Payroll',
    label: 'Deel Payroll',
    img: `${process.env.PUBLIC_URL}/images/deelPayroll/payrollImage.svg`,
    
    activeBg: 'bg-[#B1D8FC] text-black',
    hoverBg: 'hover:bg-[#B1D8FC]'
  },
  {
    key: 'Deel HR',
    label: 'Deel HR',
    img: `${process.env.PUBLIC_URL}/images/deelHr/hrImage.svg`,
    
    activeBg: 'bg-[#ffe27c] text-black',
    hoverBg: 'hover:bg-[#ffe27c]'
  },
  {
    key: 'Deel IT',
    label: 'Deel IT',
    img: `${process.env.PUBLIC_URL}/images/deelIt/itImage.svg`,
    
    activeBg: 'bg-[#c4b1f9] text-black',
    hoverBg: 'hover:bg-[#c4b1f9]'
  },
  {
    key: 'Deel Services',
    label: 'Deel Services',
    img: `${process.env.PUBLIC_URL}/images/deelServices/servicesImage.svg`,
    
    activeBg: 'bg-[#B1D8FC] text-black',
    hoverBg: 'hover:bg-[#B1D8FC]'
  }
];

function AllInOnePlatform() {
  const [activeTab, setActiveTab] = useState('Deel Payroll');
  const [prevTab, setPrevTab] = useState('Deel Payroll');

  const direction = tabs.findIndex(tab => tab.key === activeTab) > tabs.findIndex(tab => tab.key === prevTab) ? 1 : -1;
  const content = tabs.find(tab => tab.key === activeTab);

  // Animation variants for feature cards container - smoother now
  const containerVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.25,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.03,
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.25,
        ease: "easeIn",
      }
    })
  };

  // Animation variants for individual feature cards - smoother now
  const itemVariants = {
    hidden: { opacity: 0, y: 5 }, // Reduced y distance even more
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeOut",
      }
    }
  };

  return (
    <section className="py-20 text-black bg-[#FFFBF4] flex flex-col items-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Deel is your all-in-one <br /> Global People Platform
      </h2>

      {/* Tab Cards */}
      <div className="w-full max-w-4xl">
        <div className="flex flex-row justify-between gap-2 xs:gap-3 sm:gap-4">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
                <motion.button
                key={tab.key}
                onClick={() => {
                  setPrevTab(activeTab); 
                  setActiveTab(tab.key);
                }}
                className={`flex flex-col items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-xl sm:rounded-2xl transition-colors duration-300 text-center 
                  ${isActive ? tab.activeBg : `bg-[#FEF0D8] text-black ${tab.hoverBg}`}
                  flex-1
                `}
                whileHover={{ 
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" 
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                {/* Removed the rotation animation that was causing shaking */}
                <img
                  src={tab.img}
                  alt={tab.label}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1"
                />
                <span className="font-semibold text-xs xs:text-sm sm:text-base md:text-lg whitespace-nowrap">{tab.label}</span>
              </motion.button>
              
            );
          })}
        </div>
      </div>

      {/* Animated Tab Content */}
      <div className="relative h-24 flex items-center justify-center overflow-hidden w-full max-w-3xl bg-white/30 rounded-xl p-4 mb-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={content.key}
            initial={{ 
              x: direction > 0 ? 300 : -300, 
              opacity: 0,
              scale: 1
            }}
            animate={{ 
              x: 0, 
              opacity: 1,
              scale: 1
            }}
            exit={{ 
              x: direction < 0 ? 300 : -300, 
              opacity: 0,
              scale: 1
            }}
            transition={{ 
              type: "tween",
              duration: 0.25,
              ease: "easeOut",
            }}
            className="absolute text-center text-lg text-[#1B1B1B] w-full font-medium"
          >
           
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Feature Cards with Animation */}
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        {activeTab === 'Deel Payroll' && (
          <motion.div 
            className='flex flex-col gap-[35px] w-full'
            key="payroll"
            custom={direction}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelPayroll/image1.png`}
                title="Deel EOR (Employer of Record)"
                description="Hire and onboard employees in 130+ countries compliantly and quickly without opening an entity, minimizing risks related to taxes, benefits, or labor laws."
                layout="imageBottom"
                bgColor="#B1D8FC"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelPayroll/image2.png`}
                title="Deel Contractor Management"
                description="Onboard, manage, and pay global contractors with a user-friendly, self-serve platform that drastically reduces HR and payroll admin time."
                layout="imageTop"
                bgColor="#B1D8FC"
                imageWidth="85%"
              />
            </motion.div>

            <motion.div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelPayroll/image3.png`}
                title="Deel Contractor of Record"
                description="Reduce misclassification risk—let us classify and manage your global contractors."
                layout="imageTop"
                bgColor="#B1D8FC"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelPayroll/image4.png`}
                title="Deel Global Payroll"
                description="Streamline international payroll, compliance, tax deductions, filings, and more in 130+ countries, backed by our team of in-house payroll experts."
                layout="imageBottom"
                bgColor="#B1D8FC"
                imageWidth="85%"
              />
            </motion.div>

            <motion.div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelPayroll/image5.png`}
                title="Deel PEO (Professional Employer Organization)"
                description="Drive team success and unlock powerful insights with our suite of AI-powered products to manage goals, performance, learning development, team satisfaction, and more."
                layout="imageBottom"
                bgColor="#B1D8FC"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelPayroll/image6.png`}
                title="Deel US Payroll"
                description="Pay US employees through a self-serve platform with automated local payroll tax calculations, built-in compliance, and seamless integrations."
                layout="imageTop"
                bgColor="#B1D8FC"
                imageWidth="67%"
              />
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'Deel HR' && (
          <motion.div 
            className='flex flex-col gap-[35px] w-full'
            key="hr"
            custom={direction}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelHr/image1.png`}
                title="Deel Compensation"
                description="Streamline compensation planning with a centralized, collaborative workspace for pay bands, compensation review cycles, and pay transparency. "
                layout="imageBottom"
                bgColor="#ffe27c"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelHr/image2.png`}
                title="Deel Benefits Admin"
                description="Manage benefits with an employee self-serve platform to build plans automatically synced with payroll and integrated with carriers."
                layout="imageTop"
                bgColor="#ffe27c"
                imageWidth="85%"
              />
            </motion.div>

            <motion.div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelHr/image4.png`}
                title="Deel Workforce Planning"
                description="Collaborate on smarter, end-to-end planning with automated approvals, real-time data, and AI insights for confident, strategic decision-making."
                layout="imageTop"
                bgColor="#ffe27c"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelHr/image3.png`}
                title="Deel Engage"
                description="Foster a high-performance culture with a centralized, AI-powered people suite to manage development, performance, and training programs."
                layout="imageBottom"
                bgColor="#ffe27c"
                imageWidth="85%"
              />
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'Deel IT' && (
          <motion.div 
            className='flex flex-col gap-[35px] w-full'
            key="it"
            custom={direction}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelIt/itImage1.png`}
                title="Device Lifecycle Management"
                description="Manage global equipment configuration, deployment, repairs, loaners, recovery, storage, and disposal for a fixed monthly cost."
                layout="imageBottom"
                bgColor="#c4b1f9"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelIt/itImage2.png`}
                title="Mobile Device Management"
                description="Automate compliance with real-time monitoring, keep device fleets up-to-date with the latest patches, and enhance visibility and control."
                layout="imageTop"
                bgColor="#c4b1f9"
                imageWidth="85%"
              />
            </motion.div>

            <motion.div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelIt/itImage3.png`}
                title="Endpoint protection"
                description="Protect devices and workers from advanced cyber attacks, unauthorized access, data theft, and more."
                layout="imageTop"
                bgColor="#c4b1f9"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelIt/itImage4.png`}
                title="Identity and access management"
                description="Manage access to critical business tools like apps and devices in real-time, speed up onboarding, strengthen compliance, and secure company assets."
                layout="imageBottom"
                bgColor="#c4b1f9"
                imageWidth="85%"
              />
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'Deel Services' && (
          <motion.div 
            className='flex flex-col gap-[35px] w-full'
            key="services"
            custom={direction}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelServices/image1.png`}
                title="Immigration"
                description="Manage immigration and secure visas for international hires with an intuitive dashboard and eliminate the need for costly law firms or local entities."
                layout="imageBottom"
                bgColor="#B1D8FC"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelServices/image2.png`}
                title="Entity set up "
                description="Simplify global expansion with our dedicated in-house local HR managers, equity advisors, payroll managers, legal teams and 110+ owned entities. "
                layout="imageTop"
                bgColor="#B1D8FC"
                imageWidth="85%"
              />
            </motion.div>

            <motion.div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-8 max-w-[78rem] items-stretch mx-auto" variants={itemVariants}>
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelServices/image3.png`}
                title="Background checks"
                description="Automate new hire screening with fast, frictionless employment background checks integrated into onboarding and reduce time-to-hire in 190+ countries."
                layout="imageTop"
                bgColor="#B1D8FC"
              />
              <FeatureCard
                image={`${process.env.PUBLIC_URL}/images/deelServices/image4.png`}
                title="Equity consulting"
                description="In-house specialists simplify tax reporting, automate admin, and oversee all compensation so you can navigate global tax and regulatory complexities."
                layout="imageBottom"
                bgColor="#B1D8FC"
                imageWidth="85%"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AllInOnePlatform;