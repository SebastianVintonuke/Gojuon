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
        <div className="container d-flex align-items-center justify-content-center h-100">
            <div className="d-flex align-items-center gap-5" style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
                <div className="d-flex flex-column align-items-end">
                    <span className="outline" style={{ fontSize: 4 + 'em' }}> Gojūon </span>
                    <span className="outline" style={{ fontSize: 1.5 + 'em' }}> 五十音 </span>
                </div>
                <div className="d-flex flex-column gap-3">
                    <button className="btn btn-outline-primary btn-lg" onClick={() => homeHandler.onChange('intro')}>{t('MAIN_MENU.INTRODUCTION')}</button>
                    <button className="btn btn-outline-primary btn-lg" onClick={() => homeHandler.onChange('game')}>{t('MAIN_MENU.PLAY')}</button>
                    <button className="btn btn-outline-primary btn-lg" onClick={() => homeHandler.onChange('study')}>{t('MAIN_MENU.STUDY')}</button>
                    <button className="btn btn-outline-primary btn-lg" onClick={() => homeHandler.onChange('about')}>{t('MAIN_MENU.ABOUT')}</button>
                </div>
            </div>
        </div>
    )
}

export default Home