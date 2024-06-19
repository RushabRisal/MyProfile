const About = ({view}) => {
    return ( 
        <div className={`relative w-[90%] h-[80%] rounded-xl mt-10 shadow-xl bg-[#DAC0A3]/80 backdrop-blur-xl transition duration-1000 ease-in-out ${view? 'blur-md':'blur-none'}`}>
            <h1 className='absolute w-full flex justify-center md:justify-start items-center top-0 left-0 font-bold p-10 text-4xl'>About Me!</h1>
        </div>
     );
}
 
export default About;