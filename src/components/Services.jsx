import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.jpg";
import serviceImg2 from "../assets/service2.jpg";
import serviceImg3 from "../assets/service3.jpg";
import serviceImg4 from "../assets/service4.jpg";
import { motion } from 'framer-motion';
import { fadeIn } from "../Utilis/animationVariants";

const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        {/*  */}

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary 
          text-heroBg'>
            What we can do together
          </h2>
          <p className='md:w-1/2 mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus debitis architecto dolor maxime mol
            estias, nobis itaque sapiente ipsam minus. Modi?
          </p>
        </motion.div>

        {/* service category */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <motion.TabList
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-between
            items-center md:gap-8 gap-4">
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </motion.TabList>

            {/* 1st tab */}
            <TabPanel>
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row 
              gap-8 mt-8">
                <div className='md:w-1/2 bg-white rounded-lg p-12
                font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary
                  mb-4'>
                    Couple Counseling
                  </h3>
                  <p className='mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisici
                    elit. Aliquid quas cupiditate doloremque laborum
                    vel accusantium vero officia enim quibusdam dele
                  </p>
                  <h4 className='text-xl font-medium text-black
                mb-4'>Benefits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg1} alt=""
                    className='w-full h-auto rounded-2xl object-cover' />
                </div>
              </motion.div>
            </TabPanel>
            {/* 2nd tab */}
            <TabPanel>
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row 
              gap-8 mt-8">
                <div className='md:w-1/2 bg-white rounded-lg p-12
                font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary
                  mb-4'>
                    Parenting Skills
                  </h3>
                  <p className='mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisici
                    elit. Aliquid quas cupiditate doloremque laborum
                    vel accusantium vero officia enim quibusdam dele
                  </p>
                  <h4 className='text-xl font-medium text-black
                mb-4'>Benefits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg2} alt=""
                    className='w-full h-auto rounded-2xl object-cover' />
                </div>
              </motion.div>
            </TabPanel>
            {/* 3rd tab */}
            <TabPanel>
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row 
              gap-8 mt-8">
                <div className='md:w-1/2 bg-white rounded-lg p-12
                font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary
                  mb-4'>
                    Feeling Stuck
                  </h3>
                  <p className='mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisici
                    elit. Aliquid quas cupiditate doloremque laborum
                    vel accusantium vero officia enim quibusdam dele
                  </p>
                  <h4 className='text-xl font-medium text-black
                mb-4'>Benefits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg3} alt=""
                    className='w-full h-auto rounded-2xl object-cover' />
                </div>
              </motion.div>
            </TabPanel>
            {/* 4th tab */}
            <TabPanel>
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row 
              gap-8 mt-8">
                <div className='md:w-1/2 bg-white rounded-lg p-12
                font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary
                  mb-4'>
                    Self-Confidence
                  </h3>
                  <p className='mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisici
                    elit. Aliquid quas cupiditate doloremque laborum
                    vel accusantium vero officia enim quibusdam dele
                  </p>
                  <h4 className='text-xl font-medium text-black
                mb-4'>Benefits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg4} alt=""
                    className='w-full h-auto rounded-2xl object-cover' />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services;
