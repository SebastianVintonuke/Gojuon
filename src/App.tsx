import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Home from "./components/home/home";
import Intro from "./components/intro/intro";
import Game from "./components/game/game";
import Study from "./components/study/study";
import About from "./components/about/about";

type App = 'home' | 'intro' | 'game' | 'study' | 'about';

function App() {
  const { t } = useTranslation();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentApp, setCurrentApp] = useState('game');

  // TO DO MOVER A ALGO MAS GENERAL
  const [isVerticalScreen, setIsVerticalScreen] = useState(
    window.innerHeight > window.innerWidth
  );
  useEffect(() => {
    const manejarCambioOrientacion = () => {
      setIsVerticalScreen(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', manejarCambioOrientacion);

    return () => {
      window.removeEventListener('resize', manejarCambioOrientacion);
    };
  }, []);
  //

  let closeMenu = () => {
    setMenuIsOpen(false);
  };

  let openMenu = () => {
    setMenuIsOpen(true);
  }

  let openApp = (app: App) => {
    setCurrentApp(app);
    closeMenu();
  }

  return (
    <div className="d-flex height-all" style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
      {/* Menu */}
      <div className="m-3">
        <button type="button" className="btn btn-outline-primary" onClick={() => openMenu()}>
          <i className="fa fa-solid fa-bars fs-1"></i>
        </button>
      </div>
      {/* Off canvas menu */}
      <div className={`offcanvas offcanvas-start bg-primary ${menuIsOpen ? 'show' : ''}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title"> Menu </h5>
          <button type="button" className="btn-close" onClick={() => closeMenu()}></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex flex-column flex-fill gap-3 mt-4">
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('home')}> {t('MAIN_MENU.HOME')} </button>
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('intro')}> {t('MAIN_MENU.INTRODUCTION')} </button>
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('game')}> {t('MAIN_MENU.PLAY')} </button>
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('study')}> {t('MAIN_MENU.STUDY')} </button>
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('about')}> {t('MAIN_MENU.ABOUT')} </button>
          </div>
        </div>
      </div>
      {/* Apps */}
      <div className="d-flex flex-column flex-fill">
        {currentApp === 'home' ? <Home></Home> : null}
        {currentApp === 'intro' ? <Intro></Intro> : null}
        {currentApp === 'game' ? <Game></Game> : null}
        {currentApp === 'study' ? <Study></Study> : null}
        {currentApp === 'about' ? <About></About> : null}
      </div>
    </div>
  )
}

export default App

export const isMobileOrTablet = () => {
  const userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};

export const isVerticalScreen = () => {
  return window.innerHeight > window.innerWidth;
};