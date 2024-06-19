const About = ({view}) => {
    return ( 
        <div className={`relative w-[90%] h-[80%] rounded-xl text-wrap mt-10 shadow-xl bg-[#DAC0A3]/80 backdrop-blur-xl transition duration-500 ease-in-out ${view? 'blur-md':'blur-none'}`}>
            <h1 className=' w-full flex justify-center md:justify-start items-center top-0 left-0 font-bold p-10 text-4xl'>About Me!</h1>
            <h1 className="break-words font-semibold  tracking-wider flex justify-center items-center leading-6 text-xl ">I'm an enthusiastic frontend developer with a passion for learning and exploring new technologies. With a strong foundation in HTML, CSS, and JavaScript, I enjoy diving into advanced JavaScript concepts and modern frameworks like React and Vue. I am adept at using tools like Git, Webpack, and Babel to streamline development processes. I am also committed to creating responsive, accessible, and well-tested applications. I'm always excited to collaborate on projects, bringing dedication and a positive attitude to every team I join. Let's create something amazing together!</h1>
        </div>
     );
}
 
export default About;