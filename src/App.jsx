import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import NavContent from './components/NavContent';
import SideBar from './components/SideBar';
import About from './components/About';

function App() {
    const [view, setView] = useState(false);

    const handleNavBar = () => {
      console.log("hello world")
        setView(prevView => !prevView);
    };

    return (
        <>
            <div className='flex  h-svh w-full justify-center items-center'>
              {/**Hero page */}
                <Header handleNavBar={handleNavBar} />
                <Landing view={view} />
                <SideBar view={view} handleNavBar={handleNavBar}/>
            </div>
            <div className='flex  h-svh w-full justify-center items-center'>
                <About view={view}/>
            </div>
        </>
    );
}

export default App;
