import NavContent from "./NavContent";

const SideBar = ({view,handleNavBar}) => {
    return (  
        <div
        id='Navy'
        className={`fixed right-0 bg-black/80 backdrop-blur-xl h-full w-52 flex flex-col justify-center  items-center text-xl  text-white z-10 transition-transform duration-500 ease-in-out ${view ? 'translate-z-0' : 'translate-x-full'} `}
        >   
            <button onClick={handleNavBar}><i class="fa-solid fa-xmark fixed top-0 left-0 p-5"></i></button>  
            <NavContent/>
        </div>
    );
}
 
export default SideBar;