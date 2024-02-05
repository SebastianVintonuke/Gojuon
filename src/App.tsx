import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Home from "./apps/home/home";
import Intro from "./apps/intro/intro";
import Game from "./apps/game/game";
import Study from "./apps/study/study";
import About from "./apps/about/about";
import LanguageModal from './components/LanguageModal';

type App = 'home' | 'intro' | 'game' | 'study' | 'about';

function App() {
  const { t } = useTranslation();

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [currentApp, setCurrentApp] = useState<App>('home');

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

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const openMenu = () => {
    setMenuIsOpen(true);
  }

  const openApp = (app: App) => {
    setCurrentApp(app);
    closeMenu();
  }

  return (
    <div className="d-flex width-all-screen height-all-screen" style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
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
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          <div className="d-flex flex-column gap-3">
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('home')}> {t('MAIN_MENU.HOME')} </button>
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('intro')}> {t('MAIN_MENU.INTRODUCTION')} </button>
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('game')}> {t('MAIN_MENU.PLAY')} </button>
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('study')}> {t('MAIN_MENU.STUDY')} </button>
            <button type="button" className="btn btn-secondary text-primary" onClick={() => openApp('about')}> {t('MAIN_MENU.ABOUT')} </button>
          </div>
          <div className="mt-auto mb-0 d-flex justify-content-end">
            <button type="button" className="btn btn-secondary text-primary" data-bs-toggle="modal" data-bs-target="#languageModal">
              <i className="fa fa-language fs-1"></i>
            </button>
          </div>
        </div>
      </div>
      { /* Modal */}
      <LanguageModal dataBsTarget={"languageModal"} />
      {/* Apps */}
      <div className="d-flex flex-column flex-fill">
        {currentApp === 'home' ? <Home setCurrentApp={setCurrentApp}></Home> : null}
        {currentApp === 'intro' ? <Intro></Intro> : null}
        {currentApp === 'game' ? <Game></Game> : null}
        {currentApp === 'study' ? <Study></Study> : null}
        {currentApp === 'about' ? <About></About> : null}
      </div>
    </div>
  )
}

export default App

// TO DO MOVER A ALGO MAS GENERAL
export const isMobileOrTablet = () => {
  const userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};

export const isVerticalScreen = () => {
  return window.innerHeight > window.innerWidth;
};
//