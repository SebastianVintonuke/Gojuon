import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function Home() {
    const { t } = useTranslation();

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

    return (
        <div className="container d-flex align-items-center justify-content-center h-100">
            <div className="d-flex align-items-center gap-5" style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
                <img className="position-absolute character_home" src="/img/asuka_2.png" style={{ width: (isVerticalScreen ? '100vw' : '100vh') }}></img>
                <div className="d-flex flex-column align-items-end">
                    <span className="outline" style={{ fontSize: 4 + 'em' }}> Gojūon </span>
                    <span className="outline" style={{ fontSize: 1.5 + 'em' }}> 五十音 </span>
                </div>
                <div className="d-flex flex-column gap-3">
                    <button className="btn btn-outline-primary btn-lg"> {t('MAIN_MENU.INTRODUCTION')} </button>
                    <button className="btn btn-outline-primary btn-lg"> {t('MAIN_MENU.PLAY')} </button>
                    <button className="btn btn-outline-primary btn-lg"> {t('MAIN_MENU.STUDY')} </button>
                    <button className="btn btn-outline-primary btn-lg"> {t('MAIN_MENU.ABOUT')} </button>
                </div>
            </div>
        </div>
    )
}

export default Home