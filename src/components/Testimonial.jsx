import React from 'react';
import { BsFillChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import { motion } from 'framer-motion';
import { fadeIn } from "../Utilis/animationVariants";

const testimonials = [
  {
    name: 'Jane Doe',
    location: 'New York, NY',
    review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life in my daily life in my dail Highly recommended!',
    image: review1,
  },
  {
    name: 'John Smith',
    location: 'Los Angeles, CA',
    review: 'I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused in my daily life.than ever before.',
    image: review2,
  },
]

const Testimonial = () => {
  return (
    <div id='testimonial' className="bg-[#f7f8fc] py-12">
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='container mx-auto pb-20'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3
          '>What our clients says</h2>
          <p className='text-lg mb-12 md:w-1/2 mx-auto'>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cupiditate, quae! Ip
            sum, aut natus? Exercitationem, expedi
            ae doloremque.
          </p>
        </div>
        {/* card */}
        <div className='flex flex-col md:h-4/5 mx-auto md:flex-row
        md:gap-12 gap-8'>
          {
            testimonials.map((card, i) => (
              <div key={i}
                className='relative bg-white rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-0 transform
                -translate-x-1/2 translate-y-1/2'>
                  <BsFillChatQuoteFill
                    className='size-12 text-primary z-50' />
                </div>
                {/*  */}
                <div className='flex flex-col space-y-3 mb-4'>
                  <p className='text-lg mb-2'>{card.review}</p>
                  <div className='flex gap-1'>
                    <img src={card.image} alt="reviewer image"
                      className='size-16 rounded-full object-cover
                    mr-4'/>
                    <div>
                      <p className='font-semibold'>{card.name}</p>
                      <p className='text-gray-600'>{card.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </motion.div>


    </div>
  )
}

export default Testimonial;
