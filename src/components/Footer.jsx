import { fadeIn } from "../Utilis/animationVariants";

const Footer = () => {
    return (
        <div className='py-12 bg-gray-100 px-8'>
            <div className='container mx-auto grid grid-cols-1
        md:grid-cols-4 sm:grid-cols-2 gap-8'>
                {/* first footer link tag */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='space-y-6 mr-14'>
                    <div className='flex items-center space-x-2 '>
                        <img src={FooterLogo} alt="" className='
                    w-32 h-auto'/>
                    </div>
                    <p className='text-para '>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aperiam, tempore! M
                        inus enim recusandae assumenda nisi!
                    </p>
                    <div className='flex space-x-4'>
                        <a href="#" className='bg-gray-200 
                    text-primary rounded-full size-10 flex
                    items-center justify-center hover:bg-primary
                    hover:text-white
                    '>
                            <FaFacebookF className='text-xl' />
                        </a>
                        <a href="#" className='bg-gray-200 
                    text-primary rounded-full size-10 flex
                    items-center justify-center hover:bg-primary
                    hover:text-white
                    '>
                            <FaTwitter className='text-xl' />
                        </a>
                        <a href="#" className='bg-gray-200 
                    text-primary rounded-full size-10 flex
                    items-center justify-center hover:bg-primary
                    hover:text-white
                    '>
                            <FaInstagram className='text-xl' />
                        </a>
                        <a href="#" className='bg-gray-200 
                    text-primary rounded-full size-10 flex
                    items-center justify-center hover:bg-primary
                    hover:text-white
                    '>
                            <FaLinkedinIn className='text-xl' />
                        </a>
                    </div>
                </motion.div>
                {/* sec footer link tag */}
                <motion.div
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4
                '>Quick Links</h3>
                    <ul className='space-y-3'>
                        <li >
                            <a href="#home"
                                className='hover:underline
                            text-gray-700'>Home</a>
                        </li>
                        <li>
                            <a href="#about"
                                className='hover:underline
                            text-gray-700'>About Us</a>
                        </li>
                        <li>
                            <a href="#services"
                                className='hover:underline
                            text-gray-700'>Services</a>
                        </li>
                        <li>
                            <a href="#contact"
                                className='hover:underline
                            text-gray-700'>Contact Us</a>
                        </li>
                    </ul>
                </motion.div>
                {/* third footer link tag */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4
                '>Supports</h3>
                    <ul className='space-y-3'>
                        <li >
                            <a href="#"
                                className='hover:underline
                            text-gray-700'>
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className='hover:underline
                            text-gray-700'>
                                Terms of Services
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className='hover:underline
                            text-gray-700'>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#contact"
                                className='hover:underline
                            text-gray-700'>
                                Support Center
                            </a>
                        </li>
                    </ul>
                </motion.div>
                {/* fourth footer link tag */}
                
            </div>
        </div>
    )
}

export default Footer;
