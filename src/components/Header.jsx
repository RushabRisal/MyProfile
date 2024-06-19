import NavContent from "./NavContent";

const Header = ({ handleNavBar }) => {
    return (
        <nav className="fixed top-0 right-0 left-0 bg-[#9c9a98] z-10 flex justify-between items-center ">
            <h1 className="p-3 flex justify-center items-center">
                <i className="fa-brands fa-linkedin text-2xl"></i>
            </h1>
            <button onClick={handleNavBar}>
                <i className="fa-solid fa-bars md:hidden p-3 text-lg"></i>
            </button>
            <ul className="hidden md:flex justify-center z-10 text-xl mr-5 items-center">
                <NavContent />
            </ul>
        </nav>
    );
}

export default Header;
