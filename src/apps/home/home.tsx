import { useTranslation } from 'react-i18next';
import { useScreenOrientation } from '../../utils/screenOrientation';
import './home.scss';

type HomeHandler = {
    onChange: Function
}

function Home({homeHandler} : { homeHandler: HomeHandler }) {
    const isVerticalScreen = useScreenOrientation();
    const { t } = useTranslation();

    return (
        <div className='container d-flex align-items-center justify-content-center h-100'>
            <div className='d-flex flex-colum align-items-center justify-content-evenly h-100' style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
                <img src="./img/AppLogo.png" className='img-fluid w-75'></img>
                <div className='d-flex flex-column gap-3'>
                    <button className='btn btn-lg b-red t-white' onClick={() => homeHandler.onChange('intro')}>{t('MAIN_MENU.INTRODUCTION')}</button>
                    <button className='btn btn-lg b-red t-white' onClick={() => homeHandler.onChange('game')}>{t('MAIN_MENU.PLAY')}</button>
                    <button className='btn btn-lg b-red t-white' onClick={() => homeHandler.onChange('study')}>{t('MAIN_MENU.STUDY')}</button>
                    <button className='btn btn-lg b-red t-white' onClick={() => homeHandler.onChange('about')}>{t('MAIN_MENU.ABOUT')}</button>
                </div>
            </div>
        </div>
    )
}

export default Home