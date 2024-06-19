const Landing = ({view}) => {
    return ( 
        <div className={`${view? "blur-md":"blur-none"} container  mx-auto flex flex-col md:flex-row`}>
            <div className="w-full h-full flex justify-center items-center">
                <img src="../src/image/rushabcrop.jpg" alt="rushab" className="h-52  w-52 md:w-72 md:h-72 drop-shadow-2xl"/>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center md:items-start mt-10 md:ms-[-100px]">
                <h1 className="text-xl md:text-3xl w-full flex justify-center md:block mt-5 md:ms-[-80px] ">
                    Hi! I'm Rushab Risal
                </h1>
                <h2 className="font-black text-4xl md:text-6xl md:ms-[-95px] ">
                    Web Developer.
                </h2>
                <h3 className="text-md md:text-xl sm:ms-0 drop-shadow-xl md:ms-[-80px]">Minimalism is a form of attraction.</h3>
            </div>

        </div>
     );
}
 
export default Landing;