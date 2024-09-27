import react from React;

const About = () => {
  const [isVideoPlaying, setISVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setISVideoPlaying(true);
  }
  const handleClosePlaying = () => {
    setISVideoPlaying(false);
  }
  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col
        md:flex-row items-center gap-8'>
          {/* left side */}
          <div className='md:w-1/2 w-full mb-8 md:mb-0'>
            {
              !isVideoPlaying ? (
                <div className='relative'>
                  <img src={thumbnail} alt="video thumbnail"
                    className='w-full md:h-[446px] h-auto rounded-lg
                  object-cover'/>
                  <button onClick={handleVideoPlay}
                    className='absolute top-1/2 left-1/2 
                  transform -translate-x-1/2 -translate-y-1/2
                  bg-primary p-3 rounded-full shadow-lg
                  cursor-pointer'>
                    <IoPlay className='size-12 text-white' />
                  </button>
                </div>
              ) : (null)
            }
          </div>

          {/* right side */}
          <div className='md:w-1/2 w-full'>
            <h2 className='text-4xl font-secondary font-bold mb-4
             leading-snug capitalize'>
              Individual consult and therapy
            </h2>
            <p className='text-lg mb-12 md:pr-8'>
              Lorem ipsum dolor sit, amet consectetur adipisicing eli
              Dolore ipsa delectus impedit laboriosam at cum adipisci
              quam aut aspernatur mollitia!
            </p>
            <button className='bg-primary text-white py-3.5 px-8
         font-medium rounded-md hover:bg-primary/90'>
              <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <IoArrowForwardCircle />
              </a>
            </button>
          </div>
        </div>
        {
          isVideoPlaying && (
            <div className='fixed inset-0 bg-black bg-opacity-75
            items-center flex justify-center z-50'>
              <div className='relative w-full h-full flex items-center
              justify-center'>
           
             
                <button onClick={handleClosePlaying}
                  className='absolute top-4 right-4 text-white text-2xl
                  cursor-pointer'>
                  <ImCross />
                </button>
              </div>
            </div>
          )
        }
      </motion.div>
    </div>
  )
}

export default About;
