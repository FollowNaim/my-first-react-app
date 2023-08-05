import React from 'react';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Nav from './Components/Nav';
import Bgimg from './assets/sign-up-bg.jpg';
import AllVideos from './Components/FullVideos'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh', 
    position: 'fixed',
    zIndex: -1,
};
  return (
    <div>
    <div style={backgroundStyle}></div>
      <div class="flex justify-center items-center overflow-auto">
        <div className="container max-w-[60rem]">
          <Nav />
          <AllVideos />
        </div>
      </div>
    </div>
  );
}

export default App;
