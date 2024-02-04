import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="container d-flex align-items-center justify-content-center h-100">
                <div className="d-flex flex-column align-items-center gap-5">
                    <div className="d-flex flex-column align-items-end">
                        <span style={{ fontSize: 4 + 'em' }}> Gojūon </span>
                        <span style={{ fontSize: 1.5 + 'em' }}> 五十音 </span>
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