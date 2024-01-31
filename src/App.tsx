import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="d-flex align-items-center" style={{ height: 100 + 'vh'}}>
      <div className="container">
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-column align-items-end">
            <span style={{ fontSize: 4 + 'em'}}> Gojūon </span>
            <span style={{ fontSize: 1.5 + 'em'}}> 五十音 </span>
          </div>
          <div className="d-flex flex-column gap-3">
            <button className="btn btn-outline-primary btn-lg">{t('MAIN_MENU.INTRODUCTION')}</button>
            <button className="btn btn-outline-primary btn-lg">{t('MAIN_MENU.PLAY')}</button>
            <button className="btn btn-outline-primary btn-lg">{t('MAIN_MENU.ABOUT')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App